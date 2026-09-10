// GET /api/dashboard -> campagnes du créateur connecté + statistiques
import { json, errorJson, requireCreator } from "../_utils.js";

export async function onRequestGet({ request, env }) {
  const creator = await requireCreator(env.DB, request);
  if (!creator) return errorJson("Connexion requise.", 401);

  const { results: campaigns } = await env.DB.prepare(
    "SELECT id, name, slug, frame_key, created_at FROM campaigns WHERE creator_id = ? ORDER BY created_at DESC"
  )
    .bind(creator.id)
    .all();

  const withCounts = [];
  for (const c of campaigns || []) {
    const row = await env.DB.prepare("SELECT COUNT(*) as n FROM generations WHERE campaign_id = ?")
      .bind(c.id)
      .first();
    withCounts.push({
      id: c.id,
      name: c.name,
      slug: c.slug,
      frameUrl: `/api/frames/${c.frame_key}`,
      createdAt: c.created_at,
      generations: row ? row.n : 0,
    });
  }

  const totalGenerations = withCounts.reduce((sum, c) => sum + c.generations, 0);

  return json({
    creator: { name: creator.name, email: creator.email },
    campaigns: withCounts,
    totalGenerations,
  });
}
