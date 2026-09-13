// POST /api/campaigns/:slug/track -> enregistre une génération de badge
import { json, errorJson } from "../../../_utils.js";

export async function onRequestPost({ params, env }) {
  const campaign = await env.DB.prepare("SELECT id FROM campaigns WHERE slug = ?")
    .bind(params.slug)
    .first();
  if (!campaign) return errorJson("Campagne introuvable.", 404);

  await env.DB.prepare("INSERT INTO generations (campaign_id, created_at) VALUES (?, ?)")
    .bind(campaign.id, new Date().toISOString())
    .run();

  return json({ ok: true });
}
