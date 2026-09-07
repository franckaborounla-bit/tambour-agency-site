module.exports = function () {
  const posts = [
    ["Ingénierie IA", "Titre d'article à définir : décryptage IA générative"],
    ["Communication", "Titre d'article à définir : tendances communication 360°"],
    ["Événementiel", "Titre d'article à définir : retour d'expérience événementiel"],
    ["Formation", "Titre d'article à définir : pourquoi former vos équipes à l'IA"],
    ["Agence", "Titre d'article à définir : les coulisses de Tambour Agency"],
  ];
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Actualités</b></div>
      <h1>Le journal de Tambour Agency</h1>
      <p class="lede">Actualités de l'agence, décryptages IA et digital, retours d'expérience événementiels.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${posts
        .map(
          (p, i) => `<a href="#" class="post-card" data-reveal data-reveal-delay="${i % 4}" style="display:grid">
        <div class="post-thumb" ${i % 2 ? 'style="background:linear-gradient(150deg,#17130f,#3a2e22)"' : ""}></div>
        <div><p class="post-meta">${p[0]}</p><h3>${p[1]}</h3><p>Un aperçu concis de l'article à rédiger, pour donner envie d'en savoir plus.</p></div>
      </a>`
        )
        .join("\n")}
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Newsletter</p>
        <h2>Ne manquez aucune actualité</h2>
      </div>
      <form class="newsletter" data-form style="max-width:440px; margin:0 auto; border-color:var(--line)">
        <input type="email" required placeholder="Votre email" aria-label="Votre email" style="color:var(--ink-soft)" />
        <button type="submit" aria-label="S'inscrire">→</button>
      </form>
    </div>
  </section>
  `;
};
