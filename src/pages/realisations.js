const { PROJECTS, galleryAttrs } = require("./_projects-data.js");
const { ICONS } = require("../../build.js");

const POS = {
  branding: "center",
  magazine: "center",
  "excellence-awards": "center 30%",
  "zoom-festi-africa": "center 25%",
  automatisation: "center",
};

module.exports = function () {
  const items = Object.keys(PROJECTS);
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Réalisations</b></div>
      <h1>Nos réalisations, tous pôles confondus.</h1>
      <p class="lede">Une sélection de projets menés en communication, événementiel et ingénierie IA.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="filters" data-reveal>
        <button class="filter-btn is-active" data-filter="all">Tous les projets</button>
        <button class="filter-btn" data-filter="comm">Communication 360°</button>
        <button class="filter-btn" data-filter="event">Événementiel</button>
        <button class="filter-btn" data-filter="ia">Ingénierie IA</button>
      </div>
      <div class="grid-3">
        ${items
          .map((key, i) => {
            const p = PROJECTS[key];
            return `<div class="work-card" data-cat="${p.cat}" data-reveal data-reveal-delay="${i % 3}" ${galleryAttrs(key)}>
          <div class="ph" style="background-image:url(${p.images[0]}); background-size:cover; background-position:${POS[key] || "center"}"></div>
          <div class="work-info">
            <div><span class="work-tag">${p.tag}</span><h3>${p.title}</h3></div>
            ${p.images.length > 1 ? `<span class="work-gallery-count">${ICONS.camera} ${p.images.length}</span>` : ""}
          </div>
        </div>`;
          })
          .join("\n")}
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <h2>Votre projet pourrait être le prochain.</h2>
        <a href="/contact.html" class="btn" style="background:var(--ink); color:var(--white); margin-top:24px; display:inline-flex">Démarrer un projet</a>
      </div>
    </div>
  </section>
  `;
};
