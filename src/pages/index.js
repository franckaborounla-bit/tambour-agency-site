const { ICONS } = require("../../build.js");
const { illustration } = require("./actualites.js");

module.exports = function () {
  return `
  <section class="hero">
    <div class="hero-canvas-wrap">
      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/assets/img/hero-poster.jpg"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="hero-tag">
        <span>Communication 360°</span>
        <span>Organisation événementielle</span>
        <span>Ingénierie IA</span>
      </div>
      <h1>Donner du rythme aux marques qui veulent marquer les esprits.</h1>
      <p class="lede">Tambour Agency accompagne marques et institutions sur trois terrains complémentaires : la communication, l'événementiel et l'intelligence artificielle. Une seule exigence nous anime, la précision de l'impact.</p>
      <div class="hero-actions">
        <a href="/contact.html" class="btn btn-primary">Démarrer un projet</a>
        <a href="/agence.html" class="btn btn-outline">Découvrir l'agence</a>
      </div>
    </div>
    <div class="hero-scroll"><span>Scroll</span><span class="line"></span></div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Notre triptyque</p>
        <h2>Trois expertises, une seule méthode</h2>
        <p class="lede">Derrière chaque pôle, la même discipline : comprendre, concevoir, exécuter avec exigence, pour un résultat qui se voit, s'entend et se mesure.</p>
      </div>
      <div class="poles">
        <a href="/communication.html" class="pole-card" data-reveal>
          <span class="pole-num">01</span>
          <div class="pole-icon">${ICONS.comm}</div>
          <h3>Communication 360°</h3>
          <p>Stratégie de marque, création de contenus, identité visuelle, réseaux sociaux, production audiovisuelle et relations publiques.</p>
          <span class="pole-link">Découvrir le pôle →</span>
        </a>
        <a href="/evenementiel.html" class="pole-card" data-reveal data-reveal-delay="1">
          <span class="pole-num">02</span>
          <div class="pole-icon">${ICONS.event}</div>
          <h3>Organisation événementielle</h3>
          <p>Conception et production d'événements corporate, lancements de produits, séminaires et conférences, de l'idée à la régie technique.</p>
          <span class="pole-link">Découvrir le pôle →</span>
        </a>
        <a href="/ingenierie-ia.html" class="pole-card" data-reveal data-reveal-delay="2">
          <span class="pole-num">03</span>
          <div class="pole-icon">${ICONS.ai}</div>
          <h3>Ingénierie IA</h3>
          <p>Conseil, intégration de solutions d'intelligence artificielle, automatisation des processus, ainsi qu'un pôle formation dédié.</p>
          <span class="pole-link">Découvrir le pôle →</span>
        </a>
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="stats">
        <div class="stat" data-reveal><div class="num" data-count="120" data-suffix="+">0</div><div class="label">Projets menés</div></div>
        <div class="stat" data-reveal data-reveal-delay="1"><div class="num" data-count="60" data-suffix="+">0</div><div class="label">Événements produits</div></div>
        <div class="stat" data-reveal data-reveal-delay="2"><div class="num" data-count="35" data-suffix="+">0</div><div class="label">Marques accompagnées</div></div>
        <div class="stat" data-reveal data-reveal-delay="3"><div class="num" data-count="200" data-suffix="+">0</div><div class="label">Personnes formées à l'IA</div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head split" data-reveal>
        <div>
          <p class="eyebrow">Réalisations</p>
          <h2>Une sélection de projets récents</h2>
        </div>
        <a href="/realisations.html" class="btn btn-dark">Voir tout le portfolio</a>
      </div>
      <div class="grid-3">
        <div class="work-card" data-reveal><div class="ph" style="background-image:url(/assets/img/realisations/comm/branding-identite.jpg); background-size:cover; background-position:center"></div><div class="work-info"><span class="work-tag">Communication 360°</span><h3>Identité de marque</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="1"><div class="ph" style="background-image:url(/assets/img/realisations/event/excellence-awards-1.jpg); background-size:cover; background-position:center 30%"></div><div class="work-info"><span class="work-tag">Événementiel</span><h3>Excellence Awards</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="2"><div class="ph" style="background-image:url(/assets/img/realisations/ia/automatisation.jpg); background-size:cover; background-position:center"></div><div class="work-info"><span class="work-tag">Ingénierie IA</span><h3>Automatisation d'un flux métier</h3></div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Ingénierie IA</p>
        <h2>Envie de monter en compétence sur l'IA ?</h2>
        <p class="lede">Formations individuelles ou en plénière, pour particuliers et entreprises, sur l'ensemble de nos domaines d'expertise IA et digital.</p>
      </div>
      <div style="text-align:center" data-reveal data-reveal-delay="1">
        <a href="/ingenierie-ia.html#formation" class="btn btn-primary">Voir les formations disponibles</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Témoignages</p>
        <h2>Ce que nos clients en disent</h2>
      </div>
      <div class="testi-track">
        <div class="testi-card" data-reveal>
          <div class="stars">★★★★★</div>
          <p>« Avant Tambour Agency, notre combat pour la nutrition des familles vulnérables restait invisible. Aujourd'hui, chaque campagne trouve les mots justes et touche les bonnes personnes : nos actions sont vues, comprises, soutenues. Ce que l'agence a changé pour la FND, ce n'est pas seulement notre image, c'est notre capacité à sauver plus de vies. »</p>
          <div class="testi-who"><div class="testi-avatar" style="background-image:url(/assets/img/temoignages/helena-capochichi.jpg); background-size:cover; background-position:center"></div><div><b>Helena Capochichi</b><span>Présidente, ONG FND (Famille Nutrition Développement)</span></div></div>
        </div>
        <div class="testi-card" data-reveal data-reveal-delay="1">
          <div class="stars">★★★★★</div>
          <p>« Organiser un événement pour des entrepreneurs exigeants ne laisse aucune place à l'approximation. Tambour Agency a orchestré chaque détail de SHEN - Vases d'Honneur avec une rigueur impressionnante, du concept à la régie technique. Une édition dont tous nos participants parlent encore. »</p>
          <div class="testi-who"><div class="testi-avatar" style="background-image:url(/assets/img/temoignages/lambert-sourou.jpg); background-size:cover; background-position:center"></div><div><b>Lambert Sourou</b><span>PCO, SHEN - Vases d'Honneur</span></div></div>
        </div>
        <div class="testi-card" data-reveal data-reveal-delay="2">
          <div class="stars">★★★★★</div>
          <p>« Lancer une marque de beauté 100 % assumée demandait une communication à la hauteur de mon ambition. Tambour Agency a su révéler l'identité de LONNA AUTHENTIK avec une justesse rare : aujourd'hui, mes clientes n'achètent pas juste un produit, elles adhèrent à une histoire. Mon chiffre d'affaires a suivi cette transformation. »</p>
          <div class="testi-who"><div class="testi-avatar" style="background-image:url(/assets/img/temoignages/falonne-adandedjan.jpg); background-size:cover; background-position:center 15%"></div><div><b>Falonne Adandedjan</b><span>Promotrice, LONNA AUTHENTIK</span></div></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head split" data-reveal>
        <div><p class="eyebrow">Journal</p><h2>Nos dernières actualités</h2></div>
        <a href="/actualites.html" class="btn btn-dark">Tout le journal</a>
      </div>
      <div class="grid-3">
        ${require("./actualites.js")
          .posts.slice(0, 3)
          .map(
            (p, i) => `<a href="/actualites.html" data-reveal data-reveal-delay="${i}" style="display:block">
          <div class="post-thumb" style="overflow:hidden">${illustration(p.type, "h" + i)}</div>
          <p class="post-meta" style="margin-top:16px">${p.tag}</p><h3>${p.title}</h3>
        </a>`
          )
          .join("\n")}
      </div>
    </div>
  </section>

  <section class="section section-sm trust-band">
    <div class="container">
      <p class="trust-title" data-reveal>Ils nous font confiance</p>
      <div class="trust-logos" data-reveal data-reveal-delay="1">
        <img src="/assets/img/partners/vases-dhonneur.png" alt="Vases d'Honneur" loading="lazy" />
        <img src="/assets/img/partners/shen.png" alt="SHEN, Salon d'Honneur de l'Entrepreneuriat" loading="lazy" />
        <img src="/assets/img/partners/eleeo.png" alt="ELEEO, Département" loading="lazy" />
        <img src="/assets/img/partners/lonna-authentik.png" alt="Lonna Authentik" loading="lazy" />
        <img src="/assets/img/partners/helenas-feminist-actions.png" alt="Helena's Feminist Actions" loading="lazy" />
        <img src="/assets/img/partners/fnd.png" alt="FND, ONG Famille Nutrition Développement" loading="lazy" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <h2>Un projet en tête ? Donnons-lui du rythme.</h2>
        <p style="color:rgba(255,255,255,.9); max-width:46ch; margin:16px auto 30px;">Communication, événement ou transformation IA : parlons de vos objectifs.</p>
        <a href="/contact.html" class="btn" style="background:var(--ink); color:var(--white)">Prendre contact</a>
      </div>
    </div>
  </section>
  `;
};
