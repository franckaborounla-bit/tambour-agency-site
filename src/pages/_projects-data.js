// Source unique des projets "réalisations", avec galeries multi-photos/vidéos.
// Utilisé par realisations.js, index.js et les pages pôle pour afficher
// des vignettes cliquables qui ouvrent une lightbox avec toutes les photos
// (ou vidéos) du projet, au lieu d'une seule image par pôle.
const { ICONS } = require("../../build.js");

const PROJECTS = {
  branding: {
    cat: "comm",
    tag: "Branding",
    title: "Identité de marque",
    images: [1, 2, 3, 4].map((n) => `/assets/img/realisations/comm/branding/branding-0${n}.jpg`),
  },
  magazine: {
    cat: "comm",
    tag: "Édition",
    title: "Conception de magazine",
    images: [1, 2, 3].map((n) => `/assets/img/realisations/comm/magazine/magazine-0${n}.jpg`),
  },
  "excellence-awards": {
    cat: "event",
    tag: "Cérémonie",
    title: "Excellence Awards",
    images: Array.from({ length: 14 }, (_, i) => `/assets/img/realisations/event/excellence-awards/ea-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  "zoom-festi-africa": {
    cat: "event",
    tag: "Festival",
    title: "Zoom Festi Africa",
    images: Array.from({ length: 13 }, (_, i) => `/assets/img/realisations/event/zoom-festi-africa/zfa-${String(i + 1).padStart(2, "0")}.jpg`),
  },
  automatisation: {
    cat: "ia",
    tag: "Automatisation",
    title: "Automatisation d'un flux métier",
    images: ["/assets/img/realisations/ia/automatisation/automatisation-01.jpg"],
  },
  "ia-generative": {
    cat: "ia",
    tag: "IA Générative",
    title: "Créations IA générative (texte, image, vidéo)",
    type: "video",
    // Triées de la plus légère à la plus lourde : la première sert de vignette
    // (lecture automatique en boucle, muette) sur les cartes réalisations.
    images: [1, 2, 3].map((n) => `/assets/video/realisations/ia-generative/ia-generative-0${n}.mp4`),
  },
};

const CAT_LABEL = { comm: "Communication 360°", event: "Événementiel", ia: "Ingénierie IA" };

// Rend les attributs data-gallery* à poser sur un .work-card pour que la
// lightbox (voir main.js) s'ouvre avec toutes les photos/vidéos du projet.
function galleryAttrs(key) {
  const p = PROJECTS[key];
  if (!p) return "";
  const imgs = JSON.stringify(p.images).replace(/"/g, "&quot;");
  return `data-gallery="${imgs}" data-gallery-tag="${p.tag}" data-gallery-title="${p.title}"`;
}

// Rend une carte .work-card complète pour un projet donné : couverture
// (image ou vidéo en boucle), badge nombre de médias, et attributs de
// galerie. Réutilisé par toutes les pages qui affichent des réalisations
// pour éviter les incohérences entre pages.
function renderWorkCard(key, { delay = 0, pos = "center", aspect } = {}) {
  const p = PROJECTS[key];
  if (!p) return "";
  const cover = p.images[0];
  const isVideo = p.type === "video";
  const media = isVideo
    ? `<video class="ph" src="${cover}" autoplay muted loop playsinline preload="auto" style="width:100%; height:100%; object-fit:cover"></video>`
    : `<div class="ph" style="background-image:url(${cover}); background-size:cover; background-position:${pos}"></div>`;
  const badge =
    p.images.length > 1
      ? `<span class="work-gallery-count">${isVideo ? ICONS.play : ICONS.camera} ${p.images.length}${isVideo ? " vidéos" : ""}</span>`
      : "";
  return `<div class="work-card" data-cat="${p.cat}" data-reveal data-reveal-delay="${delay}" ${aspect ? `style="aspect-ratio:${aspect}"` : ""} ${galleryAttrs(key)}>
    ${media}
    <div class="work-info">
      <div><span class="work-tag">${p.tag}</span><h3>${p.title}</h3></div>
      ${badge}
    </div>
  </div>`;
}

module.exports = { PROJECTS, galleryAttrs, CAT_LABEL, renderWorkCard };
