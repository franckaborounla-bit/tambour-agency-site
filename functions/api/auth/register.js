// POST /api/auth/register  { email, password, name }
// Crée un compte créateur, ouvre une session, pose le cookie.
import { json, errorJson, newId, hashPassword, createSession, sessionCookieHeader } from "../../_utils.js";

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return errorJson("Requête invalide.", 400);
  }

  const email = (body.email || "").toString().trim().toLowerCase();
  const password = (body.password || "").toString();
  const name = (body.name || "").toString().trim();

  if (!email || !email.includes("@")) return errorJson("Adresse email invalide.", 400);
  if (password.length < 8) return errorJson("Le mot de passe doit contenir au moins 8 caractères.", 400);
  if (!name) return errorJson("Le nom est requis.", 400);

  const existing = await env.DB.prepare("SELECT id FROM creators WHERE email = ?").bind(email).first();
  if (existing) return errorJson("Un compte existe déjà avec cet email.", 409);

  const { hash, salt } = await hashPassword(password);
  const id = newId();
  const now = new Date().toISOString();

  await env.DB.prepare(
    "INSERT INTO creators (id, email, name, password_hash, password_salt, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  )
    .bind(id, email, name, hash, salt, now)
    .run();

  const token = await createSession(env.DB, id);

  return json(
    { id, email, name },
    201,
    { "Set-Cookie": sessionCookieHeader(token) }
  );
}
