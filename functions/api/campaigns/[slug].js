// GET   /api/campaigns/:slug -> infos publiques d'une campagne
// PATCH /api/campaigns/:slug -> remplace le cadre (image) d'une campagne
//        existante, sans changer son lien public (le slug ne bouge pas).
//        Réservé au créateur propriétaire de la campagne.
import { json, errorJson, newId, requireCreator } from "../../_utils.js";

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];
const MAX_SIZE = 6 * 1024 * 1024; // 6 Mo

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

export async function onRequestPatch({ request, env, params }) {
  const creator = await requireCreator(env.DB, request);
  if (!creator) return errorJson("Connexion requise.", 401);

  const campaign = await env.DB.prepare(
    "SELECT id, creator_id, frame_key FROM campaigns WHERE slug = ?"
  )
    .bind(params.slug)
    .first();
  if (!campaign) return errorJson("Campagne introuvable.", 404);
  if (campaign.creator_id !== creator.id) {
    return errorJson("Vous n'êtes pas autorisé à modifier cette campagne.", 403);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return errorJson("Formulaire invalide.", 400);
  }

  const frame = form.get("frame");
  if (!frame || typeof frame.arrayBuffer !== "function") {
    return errorJson("Le cadre (image) est requis.", 400);
  }
  if (!ALLOWED_TYPES.includes(frame.type)) {
    return errorJson("Format d'image non supporté (PNG, JPEG ou WEBP uniquement).", 400);
  }
  if (frame.size > MAX_SIZE) {
    return errorJson("L'image du cadre est trop lourde (6 Mo maximum).", 400);
  }

  // Nouvelle clé à chaque remplacement : l'ancienne image est servie avec un
  // cache navigateur/CDN "immutable" d'un an, donc réutiliser la même clé
  // laisserait les visiteurs déjà passés voir l'ancien cadre en cache.
  const ext = frame.type === "image/png" ? "png" : frame.type === "image/webp" ? "webp" : "jpg";
  const fileKey = `${newId()}.${ext}`;

  await env.FRAMES.put(`frames/${fileKey}`, await frame.arrayBuffer(), {
    httpMetadata: { contentType: frame.type },
  });

  const oldKey = campaign.frame_key;
  await env.DB.prepare("UPDATE campaigns SET frame_key = ? WHERE id = ?").bind(fileKey, campaign.id).run();

  if (oldKey) {
    await env.FRAMES.delete(`frames/${oldKey}`).catch(() => {});
  }

  return json({ frameUrl: `/api/frames/${fileKey}` });
}
