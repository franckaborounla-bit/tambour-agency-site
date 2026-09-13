module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>L'Agence</b></div>
      <h1>L'agence qui donne le tempo à vos ambitions.</h1>
      <p class="lede">Communication 360°, organisation événementielle et ingénierie IA : trois expertises réunies sous une seule signature, au service de la précision et de l'impact.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid-2" style="align-items:center; gap:60px;">
        <div data-reveal>
          <p class="eyebrow">Notre identité</p>
          <h2>Une agence, trois expertises, un seul rythme</h2>
          <p>Tambour Agency accompagne marques, institutions et organisations sur trois terrains complémentaires : la communication 360°, l'organisation événementielle et l'ingénierie IA. Une même exigence créative et technique irrigue chacun de ces pôles, du premier brief à la mesure des résultats.</p>
          <p>Le tambour donne le rythme. Il fédère, il annonce, il marque le temps fort. C'est ce rôle que nous jouons pour nos clients, en donnant le tempo de leurs prises de parole, de leurs événements et de leur transformation digitale.</p>
        </div>
        <div class="work-card" data-reveal data-reveal-delay="1">
          <img src="/assets/img/agence-visual.jpg" alt="Tambour Agency, l'exigence créative et technique au service de l'impact" class="ph" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 15%;" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Mission, vision, valeurs</p>
        <h2>Ce qui guide chacun de nos projets</h2>
      </div>
      <div class="grid-3">
        <div class="pole-card" data-reveal style="min-height:auto">
          <h3>Mission</h3>
          <p>Donner à chaque marque, chaque événement et chaque projet IA la précision et l'impact qu'ils méritent, du premier brief à la mesure des résultats.</p>
        </div>
        <div class="pole-card" data-reveal data-reveal-delay="1" style="min-height:auto">
          <h3>Vision</h3>
          <p>Devenir la référence des agences capables de conjuguer créativité, exécution événementielle et maîtrise technologique de l'IA sur un même territoire.</p>
        </div>
        <div class="pole-card" data-reveal data-reveal-delay="2" style="min-height:auto">
          <h3>Valeurs</h3>
          <p>Rythme, précision, exigence et transparence : quatre principes qui structurent notre méthode de travail, quel que soit le pôle sollicité.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Méthode</p>
        <h2>Une méthode commune aux trois pôles</h2>
      </div>
      <div class="steps">
        <div class="step" data-reveal><div class="n">01</div><div><h3>Comprendre</h3><p>Immersion dans vos enjeux, votre marché et vos objectifs pour cadrer un brief précis, quel que soit le pôle concerné.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="1"><div class="n">02</div><div><h3>Concevoir</h3><p>Élaboration d'une stratégie et de recommandations créatives, événementielles ou technologiques adaptées à vos objectifs.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="2"><div class="n">03</div><div><h3>Exécuter</h3><p>Production et mise en œuvre avec un souci constant du détail et du respect des délais.</p></div></div>
        <div class="step" data-reveal data-reveal-delay="3"><div class="n">04</div><div><h3>Mesurer</h3><p>Analyse des résultats et recommandations d'amélioration continue pour vos prochaines initiatives.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-banner" data-reveal>
        <h2>Envie de collaborer avec Tambour Agency ?</h2>
        <p style="color:rgba(255,255,255,.9); max-width:46ch; margin:16px auto 30px;">Parlons de votre projet, quel que soit le pôle concerné.</p>
        <a href="/contact.html" class="btn" style="background:var(--ink); color:var(--white)">Prendre contact</a>
      </div>
    </div>
  </section>
  `;
};
