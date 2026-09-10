// POST /api/auth/login  { email, password }
import { json, errorJson, verifyPassword, createSession, sessionCookieHeader } from "../../_utils.js";

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return errorJson("Requête invalide.", 400);
  }

  const email = (body.email || "").toString().trim().toLowerCase();
  const password = (body.password || "").toString();
  if (!email || !password) return errorJson("Email et mot de passe requis.", 400);

  const creator = await env.DB.prepare(
    "SELECT id, email, name, password_hash, password_salt FROM creators WHERE email = ?"
  )
    .bind(email)
    .first();

  if (!creator) return errorJson("Email ou mot de passe incorrect.", 401);

  const ok = await verifyPassword(password, creator.password_hash, creator.password_salt);
  if (!ok) return errorJson("Email ou mot de passe incorrect.", 401);

  const token = await createSession(env.DB, creator.id);

  return json(
    { id: creator.id, email: creator.email, name: creator.name },
    200,
    { "Set-Cookie": sessionCookieHeader(token) }
  );
}
