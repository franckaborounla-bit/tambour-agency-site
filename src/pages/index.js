const { ICONS } = require("../../build.js");

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
      <p class="lede">Tambour Agency accompagne marques et institutions sur trois terrains — la communication, l'événementiel et l'intelligence artificielle — avec une seule exigence : la précision de l'impact.</p>
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
        <p class="lede">Derrière chaque pôle, la même discipline : comprendre, concevoir, exécuter avec exigence — pour un résultat qui se voit, s'entend et se mesure.</p>
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
          <p>Conseil, intégration de solutions d'intelligence artificielle, automatisation des processus — et un pôle formation dédié.</p>
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
        <div class="work-card" data-reveal><div class="ph"></div><div class="work-info"><span class="work-tag">Communication 360°</span><h3>Projet Exemple — Lancement de marque</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="1"><div class="ph" style="background:linear-gradient(160deg,#17130f,#3a2e22)"></div><div class="work-info"><span class="work-tag">Événementiel</span><h3>Projet Exemple — Conférence annuelle</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="2"><div class="ph" style="background:linear-gradient(160deg,#F5A423,#E45327)"></div><div class="work-info"><span class="work-tag">Ingénierie IA</span><h3>Projet Exemple — Agent IA sur-mesure</h3></div></div>
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
          <p>« Citation du client à insérer ici — retour d'expérience sur la collaboration avec Tambour Agency. »</p>
          <div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div>
        </div>
        <div class="testi-card" data-reveal data-reveal-delay="1">
          <div class="stars">★★★★★</div>
          <p>« Citation du client à insérer ici — retour d'expérience sur la collaboration avec Tambour Agency. »</p>
          <div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div>
        </div>
        <div class="testi-card" data-reveal data-reveal-delay="2">
          <div class="stars">★★★★★</div>
          <p>« Citation du client à insérer ici — retour d'expérience sur la collaboration avec Tambour Agency. »</p>
          <div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div>
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
        <div data-reveal><div class="post-thumb"></div><p class="post-meta" style="margin-top:16px">Ingénierie IA</p><h3>Titre d'article à définir</h3></div>
        <div data-reveal data-reveal-delay="1"><div class="post-thumb" style="background:linear-gradient(150deg,#17130f,#3a2e22)"></div><p class="post-meta" style="margin-top:16px">Communication</p><h3>Titre d'article à définir</h3></div>
        <div data-reveal data-reveal-delay="2"><div class="post-thumb" style="background:linear-gradient(150deg,#F5A423,#E45327)"></div><p class="post-meta" style="margin-top:16px">Événementiel</p><h3>Titre d'article à définir</h3></div>
      </div>
    </div>
  </section>

  <section class="section section-sm trust-band">
    <div class="container">
      <p class="trust-title" data-reveal>Ils nous font confiance</p>
      <div class="trust-logos" data-reveal data-reveal-delay="1">
        <img src="/assets/img/partners/vases-dhonneur.png" alt="Vases d'Honneur" loading="lazy" />
        <img src="/assets/img/partners/shen.png" alt="SHEN — Salon d'Honneur de l'Entrepreneuriat" loading="lazy" />
        <img src="/assets/img/partners/eleeo.png" alt="ELEEO — Département" loading="lazy" />
        <img src="/assets/img/partners/lonna-authentik.png" alt="Lonna Authentik" loading="lazy" />
        <img src="/assets/img/partners/helenas-feminist-actions.png" alt="Helena's Feminist Actions" loading="lazy" />
        <img src="/assets/img/partners/fnd.png" alt="FND — ONG Famille Nutrition Développement" loading="lazy" />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <h2>Un projet en tête ? Donnons-lui du rythme.</h2>
        <p style="color:rgba(255,255,255,.9); max-width:46ch; margin:16px auto 30px;">Communication, événement ou transformation IA — parlons de vos objectifs.</p>
        <a href="/contact.html" class="btn" style="background:var(--ink); color:var(--white)">Prendre contact</a>
      </div>
    </div>
  </section>
  `;
};
