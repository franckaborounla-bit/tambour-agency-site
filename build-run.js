const fs = require("fs");
const path = require("path");
const { layout } = require("./build.js");

const DIST = path.join(__dirname, "dist");
const SRC = path.join(__dirname, "src");
const MAINTENANCE_FLAG = path.join(__dirname, "MAINTENANCE");
const MAINTENANCE_SRC = path.join(__dirname, "maintenance.html");

// ============================================================
// MODE MAINTENANCE
// Si un fichier "MAINTENANCE" existe à la racine du projet, on
// publie uniquement la page de maintenance (maintenance.html) au
// lieu de reconstruire tout le site. Pour l'activer :
//   - créez un fichier vide nommé MAINTENANCE à la racine, committez, poussez
// Pour revenir au site complet :
//   - supprimez ce fichier MAINTENANCE, committez, poussez
// ============================================================
if (fs.existsSync(MAINTENANCE_FLAG)) {
  console.log("⚠️  Mode MAINTENANCE actif — publication de la page de maintenance uniquement.");
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  fs.mkdirSync(path.join(DIST, "assets", "img"), { recursive: true });

  const maintenanceHtml = fs.readFileSync(MAINTENANCE_SRC, "utf8");
  fs.writeFileSync(path.join(DIST, "index.html"), maintenanceHtml);
  fs.copyFileSync(
    path.join(SRC, "assets", "img", "favicon.svg"),
    path.join(DIST, "assets", "img", "favicon.svg")
  );
  fs.writeFileSync(path.join(DIST, "_redirects"), "/*  /index.html  200\n");
  fs.writeFileSync(path.join(DIST, "robots.txt"), "User-agent: *\nDisallow: /\n");

  console.log("✓ Page de maintenance publiée -> dist/");
  process.exit(0);
}

const PAGES = [
  {
    file: "index.html",
    title: "Tambour Agency — Communication 360°, Événementiel & Ingénierie IA",
    description: "Tambour Agency accompagne les marques en communication 360°, organisation événementielle et ingénierie IA. Découvrez nos expertises et nos formations IA.",
    bodyClass: "page-dark",
    content: require("./src/pages/index.js"),
  },
  {
    file: "agence.html",
    title: "L'Agence — Tambour Agency",
    description: "De Tambour Studio à Tambour Agency : découvrez notre histoire, notre mission, nos valeurs et notre équipe.",
    content: require("./src/pages/agence.js"),
  },
  {
    file: "communication.html",
    title: "Communication 360° — Tambour Agency",
    description: "Stratégie de marque, création de contenus, identité visuelle, réseaux sociaux, production audiovisuelle et relations publiques.",
    content: require("./src/pages/communication.js"),
  },
  {
    file: "evenementiel.html",
    title: "Organisation Événementielle — Tambour Agency",
    description: "Conception et production d'événements corporate, lancements de produits, séminaires, conférences et événements grand public.",
    content: require("./src/pages/evenementiel.js"),
  },
  {
    file: "ingenierie-ia.html",
    title: "Ingénierie IA & Formation — Tambour Agency",
    description: "Conseil en IA, intégration de solutions, automatisation des processus, et formations individuelles ou en plénière à l'IA et au digital.",
    content: require("./src/pages/ingenierie-ia.js"),
  },
  {
    file: "realisations.html",
    title: "Réalisations — Tambour Agency",
    description: "Découvrez une sélection de projets menés par Tambour Agency en communication, événementiel et ingénierie IA.",
    content: require("./src/pages/realisations.js"),
  },
  {
    file: "actualites.html",
    title: "Actualités — Tambour Agency",
    description: "Le journal de Tambour Agency : actualités de l'agence, décryptages IA et digital, retours d'expérience événementiels.",
    content: require("./src/pages/actualites.js"),
  },
  {
    file: "contact.html",
    title: "Contact — Tambour Agency",
    description: "Contactez Tambour Agency pour votre projet de communication, d'événementiel, d'ingénierie IA ou de formation.",
    content: require("./src/pages/contact.js"),
  },
  {
    file: "mentions-legales.html",
    title: "Mentions légales & Confidentialité — Tambour Agency",
    description: "Mentions légales et politique de confidentialité de Tambour Agency.",
    content: require("./src/pages/mentions-legales.js"),
  },
];

// Clean dist
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

// Write pages
PAGES.forEach((pg) => {
  const html = layout({
    title: pg.title,
    description: pg.description,
    p: pg.file,
    bodyClass: pg.bodyClass || "",
    content: pg.content(),
  });
  fs.writeFileSync(path.join(DIST, pg.file), html);
  console.log("✓ " + pg.file);
});

// Copy static assets
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
copyDir(path.join(SRC, "assets"), path.join(DIST, "assets"));

// robots.txt & sitemap.xml
fs.writeFileSync(
  path.join(DIST, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: https://www.tambouragency.com/sitemap.xml\n"
);
const base = "https://www.tambouragency.com/";
const urls = PAGES.map((p) => (p.file === "index.html" ? base : base + p.file));
fs.writeFileSync(
  path.join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`
);

// simple 404
fs.writeFileSync(
  path.join(DIST, "404.html"),
  layout({
    title: "Page introuvable — Tambour Agency",
    description: "Page introuvable.",
    p: "404.html",
    content: `<section class="section" style="padding-top:200px; text-align:center;">
      <div class="container">
        <p class="eyebrow" style="justify-content:center">Erreur 404</p>
        <h1>Cette page n'existe pas (ou plus).</h1>
        <p class="lede" style="margin-inline:auto">Retournez à l'accueil pour continuer votre visite.</p>
        <a href="/index.html" class="btn btn-primary" style="margin-top:20px">Retour à l'accueil</a>
      </div>
    </section>`,
  })
);

console.log("\nBuild terminé -> dist/");
