// =========================================================
// TAMBOUR AGENCY : functions/_utils.js
// Fonctions partagées par les Pages Functions de l'outil de
// badges : réponses JSON, hachage de mot de passe (PBKDF2 via
// Web Crypto, sans dépendance externe), gestion de session par
// cookie, génération d'identifiants et de slugs de campagne.
// =========================================================

const SESSION_COOKIE = "tambour_session";
const SESSION_DAYS = 30;

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

export function errorJson(message, status = 400) {
  return json({ error: message }, status);
}

export function newId() {
  return crypto.randomUUID();
}

// ---------- Mots de passe (PBKDF2, natif au runtime Workers) ----------
function bufToHex(buf) {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
function hexToBuf(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes.buffer;
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    key,
    256
  );
  return { hash: bufToHex(bits), salt: bufToHex(salt) };
}

export async function verifyPassword(password, hash, saltHex) {
  const salt = hexToBuf(saltHex);
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    key,
    256
  );
  return bufToHex(bits) === hash;
}

// ---------- Slugs de campagne ----------
export function slugify(name) {
  return (name || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "campagne";
}

export async function uniqueSlug(db, name) {
  const base = slugify(name);
  let slug = base;
  let i = 1;
  while (true) {
    const row = await db.prepare("SELECT id FROM campaigns WHERE slug = ?").bind(slug).first();
    if (!row) return slug;
    i += 1;
    slug = `${base}-${i}`;
  }
}

// ---------- Cookies / sessions ----------
function parseCookies(request) {
  const header = request.headers.get("Cookie") || "";
  const out = {};
  header.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx === -1) return;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

export function sessionCookieHeader(token) {
  const maxAge = SESSION_DAYS * 24 * 60 * 60;
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

export function clearCookieHeader() {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;
}

export async function createSession(db, creatorId) {
  const token = newId();
  const now = new Date();
  const expires = new Date(now.getTime() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await db
    .prepare("INSERT INTO sessions (token, creator_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
    .bind(token, creatorId, now.toISOString(), expires.toISOString())
    .run();
  return token;
}

export async function getCreatorFromSession(db, request) {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;
  const session = await db
    .prepare("SELECT creator_id, expires_at FROM sessions WHERE token = ?")
    .bind(token)
    .first();
  if (!session) return null;
  if (new Date(session.expires_at).getTime() < Date.now()) return null;
  const creator = await db
    .prepare("SELECT id, email, name, created_at FROM creators WHERE id = ?")
    .bind(session.creator_id)
    .first();
  return creator || null;
}

export async function requireCreator(db, request) {
  const creator = await getCreatorFromSession(db, request);
  if (!creator) return null;
  return creator;
}
