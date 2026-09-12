const { PROJECTS, renderWorkCard } = require("./_projects-data.js");

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
        ${items.map((key, i) => renderWorkCard(key, { delay: i % 3, pos: POS[key] || "center" })).join("\n")}
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
