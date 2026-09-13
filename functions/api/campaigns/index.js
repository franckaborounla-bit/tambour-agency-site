// POST /api/campaigns  (multipart/form-data: name, frame)
// Crée une nouvelle campagne pour le créateur connecté.
import { json, errorJson, newId, uniqueSlug, requireCreator } from "../../_utils.js";

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];
const MAX_SIZE = 6 * 1024 * 1024; // 6 Mo

export async function onRequestPost({ request, env }) {
  const creator = await requireCreator(env.DB, request);
  if (!creator) return errorJson("Connexion requise.", 401);

  let form;
  try {
    form = await request.formData();
  } catch {
    return errorJson("Formulaire invalide.", 400);
  }

  const name = (form.get("name") || "").toString().trim();
  const frame = form.get("frame");

  if (!name) return errorJson("Le nom de la campagne est requis.", 400);
  if (!frame || typeof frame.arrayBuffer !== "function") {
    return errorJson("Le cadre (image) est requis.", 400);
  }
  if (!ALLOWED_TYPES.includes(frame.type)) {
    return errorJson("Format d'image non supporté (PNG, JPEG ou WEBP uniquement).", 400);
  }
  if (frame.size > MAX_SIZE) {
    return errorJson("L'image du cadre est trop lourde (6 Mo maximum).", 400);
  }

  const id = newId();
  const slug = await uniqueSlug(env.DB, name);
  const ext = frame.type === "image/png" ? "png" : frame.type === "image/webp" ? "webp" : "jpg";
  const fileKey = `${id}.${ext}`;

  await env.FRAMES.put(`frames/${fileKey}`, await frame.arrayBuffer(), {
    httpMetadata: { contentType: frame.type },
  });

  const now = new Date().toISOString();
  await env.DB.prepare(
    "INSERT INTO campaigns (id, creator_id, name, slug, frame_key, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  )
    .bind(id, creator.id, name, slug, fileKey, now)
    .run();

  return json({ id, name, slug, frameUrl: `/api/frames/${fileKey}` }, 201);
}
