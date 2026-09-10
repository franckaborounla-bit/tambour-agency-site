// GET /api/frames/:key -> sert l'image de cadre stockée sur R2
export async function onRequestGet({ params, env }) {
  const object = await env.FRAMES.get(`frames/${params.key}`);
  if (!object) return new Response("Not found", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000, immutable");

  return new Response(object.body, { headers });
}
