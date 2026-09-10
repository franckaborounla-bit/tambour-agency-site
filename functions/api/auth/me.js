// GET /api/auth/me -> creator courant, ou { creator: null }
import { json, getCreatorFromSession } from "../../_utils.js";

export async function onRequestGet({ request, env }) {
  const creator = await getCreatorFromSession(env.DB, request);
  return json({ creator: creator || null });
}
