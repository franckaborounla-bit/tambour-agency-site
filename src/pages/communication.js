module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Communication 360°</b></div>
      <h1>Une communication qui porte, du positionnement à la production.</h1>
      <p class="lede">Stratégie de marque, création de contenus, réseaux sociaux, production audiovisuelle et relations publiques : un accompagnement complet, cohérent, mesurable.</p>
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
          ["Stratégie de marque", "Positionnement, plateforme de marque, identité verbale et visuelle."],
          ["Création de contenus", "Textes, visuels et formats adaptés à chaque canal et chaque audience."],
          ["Identité visuelle", "Logotype, charte graphique, déclinaisons print et digital."],
          ["Réseaux sociaux", "Stratégie éditoriale, community management, animation des communautés."],
          ["Production audiovisuelle", "Films de marque, formats courts, captation et montage."],
          ["Achat média & RP", "Planification média, relations presse et relations publiques."],
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
        <div class="work-card" data-reveal><div class="ph"></div><div class="work-info"><span class="work-tag">Branding</span><h3>Projet Exemple 01</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="1"><div class="ph" style="background:linear-gradient(160deg,#17130f,#3a2e22)"></div><div class="work-info"><span class="work-tag">Contenu</span><h3>Projet Exemple 02</h3></div></div>
        <div class="work-card" data-reveal data-reveal-delay="2"><div class="ph" style="background:linear-gradient(160deg,#F5A423,#E45327)"></div><div class="work-info"><span class="work-tag">Audiovisuel</span><h3>Projet Exemple 03</h3></div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="testi-track">
        <div class="testi-card" data-reveal><div class="stars">★★★★★</div><p>« Citation du client à insérer ici — retour d'expérience sur le pôle Communication 360°. »</p><div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div></div>
        <div class="testi-card" data-reveal data-reveal-delay="1"><div class="stars">★★★★★</div><p>« Citation du client à insérer ici — retour d'expérience sur le pôle Communication 360°. »</p><div class="testi-who"><div class="testi-avatar"></div><div><b>Nom Prénom</b><span>Fonction, Entreprise</span></div></div></div>
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
