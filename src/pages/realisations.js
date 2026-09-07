module.exports = function () {
  const items = [
    ["comm", "Communication 360°", "Projet Exemple 01 : Lancement de marque", ""],
    ["event", "Événementiel", "Projet Exemple 02 : Conférence annuelle", "linear-gradient(160deg,#17130f,#3a2e22)"],
    ["ia", "Ingénierie IA", "Projet Exemple 03 : Agent IA sur-mesure", "linear-gradient(160deg,#F5A423,#E45327)"],
    ["comm", "Communication 360°", "Projet Exemple 04 : Campagne réseaux sociaux", "linear-gradient(160deg,#17130f,#3a2e22)"],
    ["event", "Événementiel", "Projet Exemple 05 : Séminaire d'entreprise", ""],
    ["ia", "Ingénierie IA", "Projet Exemple 06 : Automatisation service client", "linear-gradient(160deg,#F5A423,#E45327)"],
    ["comm", "Communication 360°", "Projet Exemple 07 : Film de marque", "linear-gradient(160deg,#17130f,#3a2e22)"],
    ["event", "Événementiel", "Projet Exemple 08 : Lancement produit grand public", ""],
    ["ia", "Ingénierie IA", "Projet Exemple 09 : Tableau de bord décisionnel", "linear-gradient(160deg,#F5A423,#E45327)"],
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
            ([cat, tag, title, bg], i) => `<div class="work-card" data-cat="${cat}" data-reveal data-reveal-delay="${i % 3}">
          <div class="ph" ${bg ? `style="background:${bg}"` : ""}></div>
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
