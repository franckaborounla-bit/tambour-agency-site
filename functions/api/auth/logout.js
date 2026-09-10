// POST /api/auth/logout
import { json, clearCookieHeader } from "../../_utils.js";

export async function onRequestPost({ request, env }) {
  const header = request.headers.get("Cookie") || "";
  const match = header.match(/tambour_session=([^;]+)/);
  if (match) {
    await env.DB.prepare("DELETE FROM sessions WHERE token = ?").bind(match[1]).run();
  }
  return json({ ok: true }, 200, { "Set-Cookie": clearCookieHeader() });
}
