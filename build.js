// =========================================================
// TAMBOUR AGENCY : build.js
// Assemble les pages statiques (layout + contenu) -> dist/
// =========================================================
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");
const DIST = path.join(__dirname, "dist");

const NAV = [
  { href: "index.html", label: "Accueil" },
  { href: "agence.html", label: "L'Agence" },
  { href: "communication.html", label: "Communication 360°" },
  { href: "evenementiel.html", label: "Événementiel" },
  { href: "ingenierie-ia.html", label: "Ingénierie IA" },
  { href: "realisations.html", label: "Réalisations" },
  { href: "actualites.html", label: "Actualités" },
];

const ICONS = {
  comm: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 11v2a2 2 0 0 0 2 2h2l4 4V5L7 9H5a2 2 0 0 0-2 2Z" fill="currentColor"/><path d="M16 8.5a4 4 0 0 1 0 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M18.5 6a8 8 0 0 1 0 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  event: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="5" width="17" height="16" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 10h17" stroke="currentColor" stroke-width="1.6"/><path d="M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="8.2" cy="14.2" r="1.1" fill="currentColor"/><circle cx="12" cy="14.2" r="1.1" fill="currentColor"/><circle cx="15.8" cy="14.2" r="1.1" fill="currentColor"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="url(#g)"/><path d="M8 12.5l2.5 2.5L16 9" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.6"/></svg>`,
  growth: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17l6-6 4 4 8-9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6h6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  coins: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="9" cy="7" rx="6" ry="3.2" stroke="currentColor" stroke-width="1.6"/><path d="M3 7v4c0 1.77 2.69 3.2 6 3.2s6-1.43 6-3.2V7" stroke="currentColor" stroke-width="1.6"/><path d="M3 11v4c0 1.77 2.69 3.2 6 3.2s6-1.43 6-3.2v-4" stroke="currentColor" stroke-width="1.6"/><path d="M15 10.3c3.3.2 6 1.6 6 3.2s-2.69 3.2-6 3.2c-.34 0-.67-.01-1-.04M15 14.3c3.3.2 6 1.6 6 3.2s-2.69 3.2-6 3.2-6-1.43-6-3.2" stroke="currentColor" stroke-width="1.6"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4.8" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.6"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="17.5" cy="9" r="2.4" stroke="currentColor" stroke-width="1.5"/><path d="M15.5 20c.2-2.9 1.8-4.9 4-5.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.4" stroke="currentColor" stroke-width="1.6"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9.2" stroke="currentColor" stroke-width="1.6"/><path d="M10 8.5l6 3.5-6 3.5v-7Z" fill="currentColor"/></svg>`,
};

function socialIcons() {
  return `
  <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.5 8.65 22 11 22 14.1V21h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21h-4V9Z"/></svg></a>
  <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg></a>
  <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.5V3.2C15.9 3.1 14.8 3 13.6 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H6.5v3.2h2.7v8h4.3Z"/></svg></a>
  <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M11 10l4 2-4 2v-4Z" fill="currentColor" stroke="none"/></svg></a>`;
}

function head({ title, description, path: p }) {
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="https://www.tambouragency.com/${p === "index.html" ? "" : p}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Tambour Agency" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="https://www.tambouragency.com/assets/img/og-cover.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/style.css" />`;
}

function header(activeHref) {
  return `<a class="skip-link" href="#main">Aller au contenu</a>
  <header class="site-header">
    <div class="container">
      <a href="/index.html" class="logo" aria-label="Accueil de Tambour Agency">
        <img class="logo-img logo-img-ink" src="/assets/img/logo-ink.png" alt="Tambour Agency" />
        <img class="logo-img logo-img-white" src="/assets/img/logo-white.png" alt="Tambour Agency" />
      </a>
      <nav class="nav-links" aria-label="Navigation principale">
        ${NAV.map(
          (n) =>
            `<a href="/${n.href}" class="nav-link${activeHref === n.href ? " active" : ""}">${n.label}</a>`
        ).join("\n        ")}
        <a href="/contact.html" class="btn btn-primary nav-cta" style="display:none" data-mobile-cta>Démarrer un projet</a>
      </nav>
      <div class="header-actions">
        <a href="/contact.html" class="btn btn-primary nav-cta">Démarrer un projet</a>
        <button class="nav-toggle" aria-label="Ouvrir le menu"><span></span></button>
      </div>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-logo">TAMBOUR AGENCY</div>
          <p>Communication 360°, organisation événementielle et ingénierie IA : une seule agence, une exigence de rythme et de précision.</p>
          <div class="footer-social">${socialIcons()}</div>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="/agence.html">L'Agence</a>
          <a href="/realisations.html">Réalisations</a>
          <a href="/actualites.html">Actualités</a>
          <a href="/contact.html">Contact</a>
        </div>
        <div>
          <h4>Expertises</h4>
          <a href="/communication.html">Communication 360°</a>
          <a href="/evenementiel.html">Organisation événementielle</a>
          <a href="/ingenierie-ia.html">Ingénierie IA</a>
          <a href="/ingenierie-ia.html#formation">Formation IA &amp; digital</a>
        </div>
        <div>
          <h4>Siège &amp; contact</h4>
          <div class="footer-contact-item"><span class="fc-ic">${ICONS.pin}</span><span>Cocody, Abidjan, Côte d'Ivoire</span></div>
          <div class="footer-contact-item"><span class="fc-ic">${ICONS.phone}</span><span><a href="tel:+2250714508289">+225 07 14 50 82 89</a><br/><a href="tel:+2290197334589">+229 01 97 33 45 89</a></span></div>
          <div class="footer-contact-item"><span class="fc-ic">${ICONS.mail}</span><span><a href="mailto:tambouragency@gmail.com">tambouragency@gmail.com</a></span></div>
        </div>
        <div>
          <h4>Restons connectés</h4>
          <p>Recevez nos actualités, nos décryptages IA et nos prochaines sessions de formation.</p>
          <form class="newsletter" data-form="newsletter-footer">
            <input type="checkbox" name="botcheck" class="hidden" style="display:none" tabindex="-1" autocomplete="off" />
            <input type="email" name="email" required placeholder="Votre email" aria-label="Votre email" />
            <button type="submit" aria-label="S'inscrire">→</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Tambour Agency. Tous droits réservés.</span>
        <div class="legal-links">
          <a href="/mentions-legales.html">Mentions légales</a>
          <a href="/mentions-legales.html#confidentialite">Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
  <button class="back-to-top" aria-label="Retour en haut" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>`;
}

function layout({ title, description, p, bodyClass = "", content }) {
  return `<!doctype html>
<html lang="fr">
<head>
  ${head({ title, description, path: p })}
</head>
<body class="${bodyClass}">
  ${header(p)}
  <main id="main">
  ${content}
  </main>
  ${footer()}
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = { layout, ICONS, socialIcons };
