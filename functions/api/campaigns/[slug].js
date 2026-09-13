// GET /api/campaigns/:slug -> infos publiques d'une campagne
import { json, errorJson } from "../../_utils.js";

export async function onRequestGet({ params, env }) {
  const campaign = await env.DB.prepare(
    "SELECT id, name, slug, frame_key, created_at FROM campaigns WHERE slug = ?"
  )
    .bind(params.slug)
    .first();

  if (!campaign) return errorJson("Campagne introuvable.", 404);

  return json({
    name: campaign.name,
    slug: campaign.slug,
    frameUrl: `/api/frames/${campaign.frame_key}`,
    createdAt: campaign.created_at,
  });
}
