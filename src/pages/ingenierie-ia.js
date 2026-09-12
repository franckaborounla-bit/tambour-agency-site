const { ICONS } = require("../../build.js");

module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Ingénierie IA</b></div>
      <h1>L'intelligence artificielle qui augmente votre chiffre d'affaires.</h1>
      <p class="lede">Nous ne vendons pas de la technologie pour la technologie : à travers nos solutions IA, nous augmentons le chiffre d'affaires de nos clients, réduisons leurs coûts opérationnels et leur font gagner un temps précieux. Conseil, intégration de solutions IA, automatisation des processus et formation de vos équipes : tout est pensé pour un seul objectif, vous faire gagner plus d'argent avec l'IA.</p>
      <div class="hero-actions">
        <a href="/contact.html" class="btn btn-primary">Demander un devis</a>
        <a href="#formation" class="btn btn-outline">Voir les formations</a>
      </div>
    </div>
  </section>

  <!-- ===================== A. BLOC INFORMATION / OFFRE IA ===================== -->
  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Notre expertise</p>
        <h2>Un accompagnement de bout en bout, orienté résultats</h2>
      </div>
      <div class="grid-3">
        ${[
          ["Conseil en transformation IA", "Nous identifions les cas d'usage qui vous font gagner le plus d'argent en priorité, pas ceux qui font simplement « bonne impression »."],
          ["Intégration de solutions IA", "Des outils IA connectés à vos process existants, opérationnels en quelques semaines, pas en quelques années."],
          ["Automatisation de processus", "Chaque tâche répétitive automatisée est du temps rendu à vos équipes pour vendre, créer et développer votre activité."],
          ["Agents IA & chatbots", "Des assistants disponibles 24h/24 qui répondent à vos clients, qualifient vos prospects et ne dorment jamais."],
          ["Data & analytics", "Des tableaux de bord clairs qui transforment vos données dormantes en décisions rentables."],
          ["Accompagnement au changement", "Une adoption réelle par vos équipes, condition indispensable pour transformer l'investissement IA en croissance mesurable."],
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
        <p class="eyebrow" style="color:var(--gold)">Ce que l'IA change concrètement pour vous</p>
        <h2 style="color:#fff">Plus de chiffre d'affaires, moins de temps perdu</h2>
      </div>
      <div class="kpi-band">
        <div class="kpi-card" data-reveal><div class="kpi-ic">${ICONS.coins}</div><div class="num" data-count="35" data-suffix="%">0</div><div class="label">de chiffre d'affaires en plus en moyenne grâce à l'automatisation et aux agents IA</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="1"><div class="kpi-ic">${ICONS.clock}</div><div class="num" data-count="60" data-suffix="%">0</div><div class="label">de temps en moins passé sur les tâches répétitives et administratives</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="2"><div class="kpi-ic">${ICONS.bolt}</div><div class="num" data-count="3" data-suffix="x">0</div><div class="label">plus rapide dans le traitement des demandes clients</div></div>
        <div class="kpi-card" data-reveal data-reveal-delay="3"><div class="kpi-ic">${ICONS.users}</div><div class="num" data-count="200" data-suffix="+">0</div><div class="label">personnes déjà formées à l'IA et au digital</div></div>
      </div>
    </div>
  </section>

  <section class="section section-cream">
    <div class="container">
      <div class="grid-2" style="align-items:center; gap:60px">
        <div class="work-card" data-reveal style="aspect-ratio:4/3">
          <div class="ph" style="background-image:url(/assets/img/realisations/ia/automatisation.jpg); background-size:cover; background-position:center"></div>
          <div class="work-info"><span class="work-tag">Automatisation</span><h3>Automatisation d'un flux métier</h3></div>
        </div>
        <div data-reveal data-reveal-delay="1">
          <p class="eyebrow">Cas d'usage</p>
          <h2>Un exemple concret d'impact</h2>
          <p>Sur ce projet, nous avons automatisé un enchaînement de tâches manuelles répétitives, jusque-là chronophages pour l'équipe. Résultat : des délais de traitement divisés, des erreurs humaines éliminées, et des collaborateurs enfin recentrés sur des missions à forte valeur ajoutée.</p>
          <div class="mini-graph" aria-hidden="true">
            <span style="height:35%"></span><span style="height:45%"></span><span style="height:40%"></span><span style="height:60%"></span><span style="height:78%"></span><span style="height:92%"></span>
          </div>
          <p style="font-size:.85rem; color:var(--grey); font-weight:600; margin-top:8px">Évolution du temps gagné, mois après mois</p>
          <a href="/contact.html" class="btn btn-dark" style="margin-top:22px">Discuter de votre cas d'usage</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== B. SECTION FORMATION ===================== -->
  <section class="section" id="formation">
    <div class="container">
      <div class="formation-section" data-reveal>
        <p class="eyebrow" style="color:var(--gold)">Se former à l'IA et au digital</p>
        <h2>Formez-vous à l'IA et au digital avec Tambour Agency</h2>
        <p class="lede" style="max-width:60ch">Que vous soyez un particulier curieux ou une entreprise souhaitant faire monter ses équipes en compétence, nous proposons des parcours de formation adaptés à votre niveau et à vos objectifs, en individuel ou en plénière.</p>

        <div class="formation-modes">
          <div class="mode-card">
            <span class="mode-badge">Formation individuelle</span>
            <h3>Coaching personnalisé, 1 à 1</h3>
            <p>Un accompagnement sur-mesure, en présentiel ou en ligne, calé sur votre rythme et vos objectifs spécifiques.</p>
          </div>
          <div class="mode-card">
            <span class="mode-badge">Formation en plénière / groupe</span>
            <h3>Pour équipes, entreprises et institutions</h3>
            <p>Des sessions collectives en présentiel ou en ligne, conçues pour faire progresser tout un groupe sur un même socle de compétences.</p>
          </div>
        </div>

        <h3 style="color:#fff; margin-bottom:18px">Thématiques proposées</h3>
        <div class="topics-grid">
          ${[
            "Introduction à l'intelligence artificielle",
            "IA générative appliquée (texte, image, vidéo)",
            "Prompt engineering",
            "Automatisation no-code / low-code",
            "Chatbots & agents IA pour l'entreprise",
            "Data & analytics pour décideurs",
            "Transformation digitale & stratégie IA",
            "Réseaux sociaux & outils digitaux",
          ]
            .map((t) => `<div class="topic-chip">${t}</div>`)
            .join("\n")}
        </div>
        <p class="form-note" style="margin-bottom:36px">Liste de thématiques indicative, à préciser avec l'équipe Tambour Agency selon vos besoins.</p>

        <div class="formation-form">
          <h3>Demander une formation</h3>
          <p style="margin-bottom:26px">Remplissez ce formulaire, nous revenons vers vous sous 48h ouvrées pour construire le parcours adapté.</p>

          <form data-form="formation">
            <input type="checkbox" name="botcheck" class="hidden" style="display:none" tabindex="-1" autocomplete="off" />
            <div class="form-grid">
              <div class="field"><label for="f-name">Nom et prénom *</label><input id="f-name" name="name" type="text" required /></div>
              <div class="field"><label for="f-org">Entreprise / organisation <small>(optionnel)</small></label><input id="f-org" name="org" type="text" /></div>
              <div class="field"><label for="f-email">Email *</label><input id="f-email" name="email" type="email" required /></div>
              <div class="field"><label for="f-phone">Téléphone</label><input id="f-phone" name="phone" type="tel" /></div>
            </div>

            <div class="field full">
              <label>Type de formation souhaité *</label>
              <div class="radio-group">
                <label class="radio-pill"><input type="radio" name="type" value="individuelle" checked /><span>Individuelle</span></label>
                <label class="radio-pill"><input type="radio" name="type" value="groupe" /><span>Groupe / plénière</span></label>
              </div>
            </div>

            <div class="form-grid">
              <div class="field">
                <label for="f-topic">Thématique d'intérêt *</label>
                <select id="f-topic" name="topic" required>
                  <option value="">Sélectionner une thématique</option>
                  <option>Introduction à l'intelligence artificielle</option>
                  <option>IA générative appliquée (texte, image, vidéo)</option>
                  <option>Prompt engineering</option>
                  <option>Automatisation no-code / low-code</option>
                  <option>Chatbots &amp; agents IA pour l'entreprise</option>
                  <option>Data &amp; analytics pour décideurs</option>
                  <option>Transformation digitale &amp; stratégie IA</option>
                  <option>Réseaux sociaux &amp; outils digitaux</option>
                  <option>Autre / à définir ensemble</option>
                </select>
              </div>
              <div class="field">
                <label for="f-format">Format souhaité *</label>
                <select id="f-format" name="format" required>
                  <option value="">Sélectionner un format</option>
                  <option>Présentiel</option>
                  <option>En ligne</option>
                  <option>Indifférent</option>
                </select>
              </div>
            </div>

            <div class="form-grid">
              <div class="field"><label for="f-participants">Nombre de participants estimé <small>(si groupe)</small></label><input id="f-participants" name="participants" type="number" min="1" /></div>
              <div class="field"><label for="f-dispo">Disponibilités souhaitées</label><input id="f-dispo" name="dispo" type="text" placeholder="Ex. semaines du..." /></div>
            </div>

            <div class="field full"><label for="f-msg">Message</label><textarea id="f-msg" name="message" placeholder="Précisez votre besoin, votre niveau actuel, vos objectifs..."></textarea></div>

            <button type="submit" class="btn btn-primary btn-block">Envoyer ma demande de formation</button>
            <p class="form-note">En envoyant ce formulaire, vous acceptez d'être recontacté(e) par l'équipe Tambour Agency. Voir notre <a href="/mentions-legales.html#confidentialite" style="color:var(--orange)">politique de confidentialité</a>.</p>
          </form>

          <div class="form-success">
            <svg width="56" height="56" viewBox="0 0 24 24"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E45327"/><stop offset="1" stop-color="#F5A423"/></linearGradient></defs>${require("../../build.js").ICONS.check}</svg>
            <h3>Merci, votre demande a bien été envoyée !</h3>
            <p>Notre équipe formation revient vers vous sous 48h ouvrées pour construire votre parcours.</p>
          </div>
        </div>

        <p class="form-note" style="margin-top:26px">Vous préférez réserver directement un créneau pour une formation individuelle ? <a href="/contact.html" style="color:var(--gold)">Contactez-nous</a> pour recevoir un lien de prise de rendez-vous.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Pourquoi se former avec nous</p>
        <h2>Une formation pensée pour un retour sur investissement rapide</h2>
      </div>
      <div class="grid-3">
        ${[
          [ICONS.bolt, "100% pratique", "Aucune théorie inutile : vous repartez avec des outils IA que vous savez utiliser dès le lendemain."],
          [ICONS.target, "Formateurs terrain", "Des experts qui déploient l'IA en entreprise au quotidien, pas de simples théoriciens."],
          [ICONS.clock, "Suivi post-formation", "Un accompagnement après la session pour vous assurer que les outils sont réellement adoptés."],
        ]
          .map(
            ([ic, t, d], i) => `<div class="pole-card" data-reveal data-reveal-delay="${i}" style="min-height:200px"><div class="pole-icon">${ic}</div><h3>${t}</h3><p>${d}</p></div>`
          )
          .join("\n")}
      </div>
    </div>
  </section>
  `;
};
