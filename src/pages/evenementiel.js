const { ICONS } = require("../../build.js");
const { PROJECTS, galleryAttrs } = require("./_projects-data.js");

module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Organisation événementielle</b></div>
      <h1>Des événements pensés comme des expériences de marque.</h1>
      <p class="lede">Un événement réussi ne se contente pas de rassembler du monde : il crée un souvenir, renforce votre crédibilité et génère des opportunités concrètes pour votre marque. De la conception à la régie technique du jour J, nous produisons des événements qui marquent les esprits et qui rapportent.</p>
      <div class="hero-actions"><a href="/contact.html" class="btn btn-primary">Demander un devis</a></div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Types d'événements</p>
        <h2>Un savoir-faire adapté à chaque format</h2>
      </div>
      <div class="grid-3">
        ${[
          ["Lancements de produits", "Une mise en scène marquante qui transforme votre nouveauté en véritable événement médiatique."],
          ["Séminaires & conventions", "Une logistique sans faille qui laisse vos équipes se concentrer sur l'essentiel : le contenu et les échanges."],
          ["Conférences & sommets", "Une expérience participant soignée qui valorise votre image auprès de décideurs et de partenaires clés."],
          ["Événements grand public", "Des activations immersives qui créent un engouement réel et une visibilité durable pour votre marque."],
          ["Événements institutionnels", "Des cérémonies et inaugurations à la hauteur de votre crédibilité, sans le moindre imprévu protocolaire."],
          ["Régie technique", "Son, lumière, vidéo et diffusion : une exécution technique irréprochable, du premier au dernier applaudissement."],
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
        <h2 style="color:#fff">Un événement qui produit des résultats, pas seulement des souvenirs</h2>
      </div>
      <div class="kpi-band">
        <div class="kpi-card" data-reveal><div class="kpi-ic">${ICONS.users}</div><div class="num" data-count="60" data-suffix="+">0</div><div class="label">événements produits avec zéro incident majeur</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="1"><div class="kpi-ic">${ICONS.target}</div><div class="num" data-count="100" data-suffix="%">0</div><div class="label">de nos événements livrés dans les délais annoncés</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="2"><div class="kpi-ic">${ICONS.growth}</div><div class="num" data-count="80" data-suffix="%">0</div><div class="label">de retombées médiatiques et sociales en plus après l'événement</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="3"><div class="kpi-ic">${ICONS.bolt}</div><div class="num" data-count="24" data-suffix="h/24">0</div><div class="label">de coordination terrain le jour J, sans imprévu qui vous échappe</div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Méthodologie</p>
        <h2>De l'idée au bilan post-événement</h2>
      </div>
      <div class="steps">
        <div class="step" data-reveal><div class="n">01</div><div><h3>Conception</h3><p>Définition du concept, du format et des objectifs mesurables de l'événement.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="1"><div class="n">02</div><div><h3>Logistique</h3><p>Sélection du lieu, prestataires, planning détaillé et coordination des équipes.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="2"><div class="n">03</div><div><h3>Jour J</h3><p>Régie technique, coordination terrain et gestion des imprévus en temps réel.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="3"><div class="n">04</div><div><h3>Bilan</h3><p>Retour d'expérience, indicateurs de satisfaction et recommandations pour la suite.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head split" data-reveal>
        <div><p class="eyebrow">Réalisations</p><h2>Événements produits par l'agence</h2></div>
        <a href="/realisations.html" class="btn btn-dark">Voir tout le portfolio</a>
      </div>
      <div class="grid-2">
        ${["excellence-awards", "zoom-festi-africa"]
          .map((key, i) => {
            const p = PROJECTS[key];
            const pos = key === "excellence-awards" ? "center 30%" : "center 25%";
            return `<div class="work-card" data-reveal data-reveal-delay="${i}" ${galleryAttrs(key)}>
          <div class="ph" style="background-image:url(${p.images[0]}); background-size:cover; background-position:${pos}"></div>
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
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Témoignage</p>
        <h2>Ce qu'en dit un organisateur exigeant</h2>
      </div>
      <div class="testi-track" style="grid-template-columns:1fr; max-width:640px; margin:0 auto">
        <div class="testi-card" data-reveal><div class="stars">★★★★★</div><p>« Organiser un événement pour des entrepreneurs exigeants ne laisse aucune place à l'approximation. Tambour Agency a orchestré chaque détail de SHEN - Vases d'Honneur avec une rigueur impressionnante, du concept à la régie technique. Le résultat : une édition dont tous nos participants parlent encore, et une agence sur qui je sais pouvoir compter les yeux fermés. »</p><div class="testi-who"><div class="testi-avatar" style="background-image:url(/assets/img/temoignages/lambert-sourou.jpg); background-size:cover; background-position:center"></div><div><b>Lambert Sourou</b><span>PCO, SHEN - Vases d'Honneur</span></div></div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="cta-banner" data-reveal style="text-align:left; display:flex; flex-wrap:wrap; gap:28px; align-items:center; justify-content:space-between">
        <div style="max-width:60ch">
          <p class="eyebrow" style="color:var(--gold)">Nouveau</p>
          <h2>Créez le badge photo de votre événement</h2>
          <p class="lede" style="margin-top:10px">Un cadre à vos couleurs, un lien à partager, et chaque participant génère son propre badge en quelques secondes. Gratuit pendant la phase de lancement.</p>
        </div>
        <a href="/badges.html" class="btn btn-primary" style="white-space:nowrap">Découvrir l'outil de badges</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <h2>Un événement à organiser ? Donnons-lui le bon tempo.</h2>
        <a href="/contact.html" class="btn" style="background:var(--ink); color:var(--white); margin-top:24px; display:inline-flex">Demander un devis Événementiel</a>
      </div>
    </div>
  </section>
  `;
};
