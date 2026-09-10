module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Organisation événementielle</b></div>
      <h1>Des événements pensés comme des expériences de marque.</h1>
      <p class="lede">De la conception à la régie technique du jour J, nous produisons des événements corporate, institutionnels et grand public qui marquent les esprits.</p>
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
          ["Lancements de produits", "Mise en scène et scénarisation d'un temps fort autour de votre nouveauté."],
          ["Séminaires & conventions", "Organisation logistique complète pour vos équipes et vos réseaux."],
          ["Conférences & sommets", "Programmation, intervenants, régie technique et expérience participant."],
          ["Événements grand public", "Activations et expériences immersives pour toucher un large public."],
          ["Événements institutionnels", "Cérémonies, inaugurations et temps forts protocolaires."],
          ["Régie technique", "Son, lumière, vidéo et diffusion : une exécution technique sans faille."],
        ]
          .map(
            ([t, d], i) => `<div class="pole-card" data-reveal data-reveal-delay="${i % 3}" style="min-height:220px"><h3>${t}</h3><p>${d}</p></div>`
          )
          .join("\n")}
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
      <div class="grid-3">
        <div class="work-card" data-reveal><div class="ph"></div><div class="work-info"><span class="work-tag">Lancement produit</span><h3>Projet Exemple 01</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="1"><div class="ph" style="background:linear-gradient(160deg,#17130f,#3a2e22)"></div><div class="work-info"><span class="work-tag">Conférence</span><h3>Projet Exemple 02</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="2"><div class="ph" style="background:linear-gradient(160deg,#F5A423,#E45327)"></div><div class="work-info"><span class="work-tag">Séminaire</span><h3>Projet Exemple 03</h3></div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="testi-track">
        <div class="testi-card" data-reveal><div class="stars">★★★★★</div><p>« Citation du client à insérer ici, un retour d'expérience sur un événement produit par Tambour Agency. »</p><div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div></div>
        <div class="testi-card" data-reveal data-reveal-delay="1"><div class="stars">★★★★★</div><p>« Citation du client à insérer ici, un retour d'expérience sur un événement produit par Tambour Agency. »</p><div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div></div>
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
