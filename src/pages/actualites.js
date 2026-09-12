// Illustrations vectorielles originales (SVG inline), pour éviter toute image
// générique et donner un rendu "sur-mesure" à chaque article du journal.
function illustration(type, uid) {
  const g = `g${uid}`;
  const defs = `<defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E45327"/><stop offset="1" stop-color="#F5A423"/></linearGradient></defs>`;
  const dark = `<rect width="400" height="300" fill="#17130f"/>`;
  const svgs = {
    ia: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${defs}${dark}
      <circle cx="200" cy="150" r="58" fill="none" stroke="url(#${g})" stroke-width="2.5"/>
      <circle cx="200" cy="150" r="10" fill="url(#${g})"/>
      <g stroke="url(#${g})" stroke-width="2" opacity=".85">
        <line x1="200" y1="150" x2="120" y2="90"/><line x1="200" y1="150" x2="280" y2="90"/>
        <line x1="200" y1="150" x2="110" y2="180"/><line x1="200" y1="150" x2="290" y2="180"/>
        <line x1="200" y1="150" x2="150" y2="230"/><line x1="200" y1="150" x2="250" y2="230"/>
      </g>
      <g fill="url(#${g})">
        <circle cx="120" cy="90" r="7"/><circle cx="280" cy="90" r="7"/>
        <circle cx="110" cy="180" r="6"/><circle cx="290" cy="180" r="6"/>
        <circle cx="150" cy="230" r="6"/><circle cx="250" cy="230" r="6"/>
      </g>
      <path d="M200 60l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#fff" opacity=".9"/>
    </svg>`,
    comm: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${defs}${dark}
      <path d="M110 150l70-42v84z" fill="url(#${g})"/>
      <rect x="180" y="128" width="18" height="44" rx="4" fill="url(#${g})"/>
      <path d="M96 132h14v36H96z" fill="url(#${g})"/>
      <path d="M120 195l-10 34" stroke="url(#${g})" stroke-width="6" stroke-linecap="round"/>
      <g stroke="#fff" stroke-width="3" fill="none" opacity=".85">
        <path d="M214 110c14 10 14 70 0 80"/>
        <path d="M232 92c26 18 26 98 0 116"/>
        <path d="M250 76c38 26 38 132 0 148"/>
      </g>
    </svg>`,
    event: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${defs}${dark}
      <path d="M200 60l46 130H154z" fill="url(#${g})" opacity=".22"/>
      <path d="M200 100l30 96h-60z" fill="url(#${g})"/>
      <rect x="120" y="220" width="160" height="14" rx="4" fill="url(#${g})"/>
      <g fill="#fff">
        <circle cx="90" cy="90" r="5"/><circle cx="310" cy="90" r="5"/>
        <circle cx="60" cy="150" r="4"/><circle cx="340" cy="150" r="4"/>
        <circle cx="120" cy="60" r="3.5"/><circle cx="280" cy="60" r="3.5"/>
      </g>
      <path d="M170 220v-18a30 30 0 0 1 60 0v18" fill="none" stroke="url(#${g})" stroke-width="6"/>
    </svg>`,
    formation: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${defs}${dark}
      <path d="M200 90l100 38-100 38-100-38z" fill="url(#${g})"/>
      <path d="M140 148v46c0 14 27 26 60 26s60-12 60-26v-46" fill="none" stroke="url(#${g})" stroke-width="5"/>
      <line x1="300" y1="128" x2="300" y2="190" stroke="#fff" stroke-width="3"/>
      <circle cx="300" cy="196" r="5" fill="#fff"/>
      <path d="M204 46l6 14 14 6-14 6-6 14-6-14-14-6 14-6z" fill="#fff" opacity=".9"/>
    </svg>`,
    agence: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${defs}${dark}
      <ellipse cx="200" cy="150" rx="86" ry="58" fill="none" stroke="url(#${g})" stroke-width="8"/>
      <ellipse cx="200" cy="150" rx="86" ry="58" fill="url(#${g})" opacity=".12"/>
      <g stroke="url(#${g})" stroke-width="5" stroke-linecap="round">
        <line x1="128" y1="112" x2="104" y2="90"/>
        <line x1="272" y1="112" x2="296" y2="90"/>
        <line x1="128" y1="188" x2="104" y2="210"/>
        <line x1="272" y1="188" x2="296" y2="210"/>
      </g>
      <circle cx="200" cy="150" r="18" fill="#fff"/>
      <path d="M186 150l10 10 18-22" stroke="url(#${g})" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  };
  return svgs[type] || svgs.agence;
}

const posts = [
    {
      tag: "Ingénierie IA",
      type: "ia",
      title: "L'IA peut-elle vraiment faire gagner de l'argent à votre entreprise ? La réponse en chiffres",
      excerpt:
        "Automatisation, agents IA, data : nous avons chiffré l'impact réel de nos projets pour nos clients. Chiffre d'affaires, temps gagné, coûts réduits : voici ce que l'IA change concrètement quand elle est bien intégrée.",
    },
    {
      tag: "Communication",
      type: "comm",
      title: "Pourquoi 90 % des marques passent inaperçues (et comment sortir du lot)",
      excerpt:
        "Poster n'est pas communiquer. Découvrez les 4 erreurs qui rendent une marque invisible sur ses réseaux et ce que nous mettons en place pour transformer une audience passive en clientèle active.",
    },
    {
      tag: "Événementiel",
      type: "event",
      title: "Ce que nos 60 événements nous ont appris sur ce qui rend un moment inoubliable",
      excerpt:
        "De l'Excellence Awards à Zoom Festi Africa, retour sur les coulisses de nos productions événementielles et sur les détails invisibles qui font toute la différence le jour J.",
    },
    {
      tag: "Formation",
      type: "formation",
      title: "Former ses équipes à l'IA : le levier de productivité que personne ne veut manquer",
      excerpt:
        "Vos concurrents forment déjà leurs équipes à l'IA. Voici pourquoi la formation est aujourd'hui l'investissement au meilleur retour, et comment nous construisons un parcours qui produit des résultats dès la première semaine.",
    },
    {
      tag: "Agence",
      type: "agence",
      title: "Dans les coulisses de Tambour Agency : notre méthode pour donner du rythme à votre marque",
      excerpt:
        "Comprendre, concevoir, exécuter, mesurer : découvrez la méthode commune à nos trois pôles, celle qui structure chacun de nos projets, de la stratégie à la production.",
    },
];

function actualitesPage() {
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
        <div class="post-thumb" style="overflow:hidden">${illustration(p.type, i)}</div>
        <div><p class="post-meta">${p.tag}</p><h3>${p.title}</h3><p>${p.excerpt}</p></div>
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
      <form class="newsletter" data-form="newsletter-actu" style="max-width:440px; margin:0 auto; border-color:var(--line)">
        <input type="checkbox" name="botcheck" class="hidden" style="display:none" tabindex="-1" autocomplete="off" />
        <input type="email" name="email" required placeholder="Votre email" aria-label="Votre email" style="color:var(--ink-soft)" />
        <button type="submit" aria-label="S'inscrire">→</button>
      </form>
    </div>
  </section>
  `;
}

module.exports = actualitesPage;
module.exports.illustration = illustration;
module.exports.posts = posts;
