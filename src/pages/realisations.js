module.exports = function () {
  const items = [
    ["comm", "Communication 360°", "Identité de marque", "/assets/img/realisations/comm/branding-identite.jpg", "center"],
    ["event", "Événementiel", "Excellence Awards", "/assets/img/realisations/event/excellence-awards-1.jpg", "center 30%"],
    ["ia", "Ingénierie IA", "Automatisation d'un flux métier", "/assets/img/realisations/ia/automatisation.jpg", "center"],
    ["comm", "Communication 360°", "Charte graphique & supports", "/assets/img/realisations/comm/branding-declinaisons.jpg", "center"],
    ["event", "Événementiel", "Excellence Awards, remise des prix", "/assets/img/realisations/event/excellence-awards-2.jpg", "center 30%"],
    ["comm", "Communication 360°", "Conception de magazine", "/assets/img/realisations/comm/magazine-edition.jpg", "center"],
    ["event", "Événementiel", "Zoom Festi Africa", "/assets/img/realisations/event/zoom-festi-africa.jpg", "center 25%"],
  ];
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
          .map(
            ([cat, tag, title, img, pos], i) => `<div class="work-card" data-cat="${cat}" data-reveal data-reveal-delay="${i % 3}">
          <div class="ph" style="background-image:url(${img}); background-size:cover; background-position:${pos}"></div>
          <div class="work-info"><span class="work-tag">${tag}</span><h3>${title}</h3></div>
        </div>`
          )
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
