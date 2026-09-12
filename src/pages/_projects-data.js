// Source unique des projets "réalisations", avec galeries multi-photos.
// Utilisé par realisations.js, index.js et les pages pôle pour afficher
// des vignettes cliquables qui ouvrent une lightbox avec toutes les photos
// du projet (au lieu d'une seule image par pôle).
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
};

// Rend les attributs data-gallery* à poser sur un .work-card pour que la
// lightbox (voir main.js) s'ouvre avec toutes les photos du projet.
function galleryAttrs(key) {
  const p = PROJECTS[key];
  if (!p) return "";
  const imgs = JSON.stringify(p.images).replace(/"/g, "&quot;");
  return `data-gallery="${imgs}" data-gallery-tag="${p.tag}" data-gallery-title="${p.title}"`;
}

const CAT_LABEL = { comm: "Communication 360°", event: "Événementiel", ia: "Ingénierie IA" };

module.exports = { PROJECTS, galleryAttrs, CAT_LABEL };
