const { ICONS } = require("../../build.js");

module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Communication 360°</b></div>
      <h1>Une communication qui porte, du positionnement à la production.</h1>
      <p class="lede">Vous ne payez pas pour de « belles images » : vous investissez pour être vu, compris et choisi. Notre pôle Communication 360° transforme votre prise de parole en visibilité, votre visibilité en confiance, et votre confiance en clients.</p>
      <div class="hero-actions"><a href="/contact.html" class="btn btn-primary">Demander un devis</a></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Nos prestations</p>
        <h2>Un pôle, sept expertises complémentaires</h2>
      </div>
      <div class="grid-3">
        ${[
          ["Stratégie de marque", "Un positionnement clair qui vous différencie durablement de la concurrence et donne envie de vous choisir, vous plutôt qu'un autre."],
          ["Création de contenus", "Des contenus qui arrêtent le scroll, retiennent l'attention et poussent à l'action : suivre, contacter, acheter."],
          ["Identité visuelle", "Une image qui inspire confiance dès la première seconde, sur tous vos supports, print comme digital."],
          ["Réseaux sociaux", "Une communauté qui grandit, s'engage et se transforme progressivement en clientèle fidèle."],
          ["Production audiovisuelle", "Des films et formats qui marquent les esprits, se partagent naturellement et font parler de votre marque."],
          ["Achat média & RP", "Une visibilité qui touche les bonnes personnes au bon moment, pour un budget média optimisé et mesurable."],
        ]
          .map(
            ([t, d], i) => `<div class="pole-card" data-reveal data-reveal-delay="${i % 3}" style="min-height:220px"><h3>${t}</h3><p>${d}</p></div>`
          )
          .join("\n")}
      </div>
    </div>
  </section>

  <section class="section section-dark">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow" style="color:var(--gold)">Ce que ça change concrètement</p>
        <h2 style="color:#fff">Une communication qui se mesure, pas seulement qui se voit</h2>
      </div>
      <div class="kpi-band">
        <div class="kpi-card" data-reveal><div class="kpi-ic">${ICONS.eye}</div><div class="num" data-count="65" data-suffix="%">0</div><div class="label">de visibilité en plus en moyenne sur les 6 premiers mois</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="1"><div class="kpi-ic">${ICONS.users}</div><div class="num" data-count="3" data-suffix="x">0</div><div class="label">d'engagement en plus sur les réseaux sociaux</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="2"><div class="kpi-ic">${ICONS.growth}</div><div class="num" data-count="40" data-suffix="%">0</div><div class="label">de notoriété de marque gagnée grâce à une stratégie cohérente</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="3"><div class="kpi-ic">${ICONS.target}</div><div class="num" data-count="100" data-suffix="%">0</div><div class="label">des contenus alignés à vos objectifs commerciaux</div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Méthodologie</p>
        <h2>Du brief à la livraison</h2>
      </div>
      <div class="steps">
        <div class="step" data-reveal><div class="n">01</div><div><h3>Brief &amp; audit</h3><p>Analyse de votre positionnement actuel, de votre marché et de vos objectifs de communication.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="1"><div class="n">02</div><div><h3>Stratégie</h3><p>Recommandation stratégique et créative, calendrier éditorial et plan média.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="2"><div class="n">03</div><div><h3>Production</h3><p>Création des contenus, tournages, déclinaisons sur l'ensemble des canaux retenus.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="3"><div class="n">04</div><div><h3>Diffusion &amp; analyse</h3><p>Mise en ligne, suivi de performance et ajustements continus.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head split" data-reveal>
        <div><p class="eyebrow">Réalisations</p><h2>Projets Communication 360°</h2></div>
        <a href="/realisations.html" class="btn btn-dark">Voir tout le portfolio</a>
      </div>
      <div class="grid-3">
        <div class="work-card" data-reveal><div class="ph" style="background-image:url(/assets/img/realisations/comm/branding-identite.jpg); background-size:cover; background-position:center"></div><div class="work-info"><span class="work-tag">Branding</span><h3>Identité de marque</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="1"><div class="ph" style="background-image:url(/assets/img/realisations/comm/branding-declinaisons.jpg); background-size:cover; background-position:center"></div><div class="work-info"><span class="work-tag">Déclinaisons</span><h3>Charte graphique &amp; supports</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="2"><div class="ph" style="background-image:url(/assets/img/realisations/comm/magazine-edition.jpg); background-size:cover; background-position:center"></div><div class="work-info"><span class="work-tag">Édition</span><h3>Conception de magazine</h3></div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Témoignages</p>
        <h2>Ce que nos clients Communication en disent</h2>
      </div>
      <div class="testi-track">
        <div class="testi-card" data-reveal><div class="stars">★★★★★</div><p>« Lancer une marque de beauté 100 % assumée demandait une communication à la hauteur de mon ambition. Tambour Agency a su révéler l'identité de LONNA AUTHENTIK avec une justesse rare : aujourd'hui, mes clientes n'achètent pas juste un produit, elles adhèrent à une histoire. »</p><div class="testi-who"><div class="testi-avatar" style="background-image:url(/assets/img/temoignages/falonne-adandedjan.jpg); background-size:cover; background-position:center 15%"></div><div><b>Falonne Adandedjan</b><span>Promotrice, LONNA AUTHENTIK</span></div></div></div>
        <div class="testi-card" data-reveal data-reveal-delay="1"><div class="stars">★★★★★</div><p>« Avant Tambour Agency, notre combat pour la nutrition des familles vulnérables restait invisible. Aujourd'hui, chaque campagne trouve les mots justes et touche les bonnes personnes : nos actions sont vues, comprises, soutenues. »</p><div class="testi-who"><div class="testi-avatar" style="background-image:url(/assets/img/temoignages/helena-capochichi.jpg); background-size:cover; background-position:center"></div><div><b>Helena Capochichi</b><span>Présidente, ONG FND</span></div></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <h2>Parlons de votre stratégie de communication.</h2>
        <a href="/contact.html" class="btn" style="background:var(--ink); color:var(--white); margin-top:24px; display:inline-flex">Demander un devis Communication</a>
      </div>
    </div>
  </section>
  `;
};
