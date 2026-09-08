const { ICONS } = require("../../build.js");

module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <b>Contact</b></div>
      <h1>Parlons de votre projet.</h1>
      <p class="lede">Communication, événementiel, ingénierie IA ou formation : écrivez-nous, nous revenons vers vous sous 48h ouvrées.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <div data-reveal>
          <h2>Écrivez-nous</h2>
          <form data-form="contact">
            <input type="checkbox" name="botcheck" class="hidden" style="display:none" tabindex="-1" autocomplete="off" />
            <div class="form-grid">
              <div class="field"><label for="c-name">Nom et prénom *</label><input id="c-name" name="name" type="text" required /></div>
              <div class="field"><label for="c-email">Email *</label><input id="c-email" name="email" type="email" required /></div>
            </div>
            <div class="form-grid">
              <div class="field"><label for="c-phone">Téléphone</label><input id="c-phone" name="phone" type="tel" /></div>
              <div class="field">
                <label for="c-pole">Pôle concerné *</label>
                <select id="c-pole" name="pole" required>
                  <option value="">Sélectionner</option>
                  <option>Communication 360°</option>
                  <option>Organisation événementielle</option>
                  <option>Ingénierie IA</option>
                  <option>Formation IA &amp; digital</option>
                  <option>Autre demande</option>
                </select>
              </div>
            </div>
            <div class="field full"><label for="c-msg">Votre message *</label><textarea id="c-msg" name="message" required placeholder="Décrivez votre projet ou votre besoin..."></textarea></div>
            <button type="submit" class="btn btn-primary btn-block">Envoyer le message</button>
          </form>
          <div class="form-success">
            <svg width="56" height="56" viewBox="0 0 24 24"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E45327"/><stop offset="1" stop-color="#F5A423"/></linearGradient></defs>${ICONS.check}</svg>
            <h3>Merci, votre message a bien été envoyé !</h3>
            <p>Notre équipe revient vers vous sous 48h ouvrées.</p>
          </div>
        </div>

        <div data-reveal data-reveal-delay="1">
          <h2>Coordonnées</h2>
          <div class="contact-info-item"><div class="ic">${ICONS.mail}</div><div><b>Email</b><p style="margin:0">contact@tambouragency.com</p></div></div>
          <div class="contact-info-item"><div class="ic">${ICONS.phone}</div><div><b>Téléphone</b><p style="margin:0">+XXX XX XX XX XX</p></div></div>
          <div class="contact-info-item"><div class="ic">${ICONS.pin}</div><div><b>Adresse</b><p style="margin:0">[Adresse à compléter], [Ville, Pays]</p></div></div>
          <div class="map-block">Carte de localisation à intégrer (Google Maps)</div>
          <div class="footer-social" style="margin-top:26px; color:var(--ink)">
            <a href="#" aria-label="LinkedIn" style="border-color:var(--line)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.5 8.65 22 11 22 14.1V21h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21h-4V9Z"/></svg></a>
            <a href="#" aria-label="Instagram" style="border-color:var(--line)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1"/></svg></a>
            <a href="#" aria-label="WhatsApp" style="border-color:var(--line)"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.3c-.24.68-1.4 1.3-1.94 1.35-.5.06-1.1.08-1.78-.11-.4-.12-.93-.3-1.6-.6-2.8-1.2-4.63-4-4.77-4.2-.14-.2-1.14-1.5-1.14-2.87 0-1.36.72-2.02.97-2.3.25-.27.55-.34.73-.34h.53c.17 0 .4-.06.62.48.24.58.8 2 .87 2.15.07.14.12.31.02.5-.1.2-.15.32-.3.5-.14.16-.3.37-.44.5-.14.14-.3.3-.13.6.17.32.76 1.28 1.65 2.08 1.13 1.02 2.08 1.34 2.4 1.5.3.14.48.12.66-.07.18-.2.76-.9.96-1.2.2-.3.4-.25.66-.15.28.1 1.76.85 2.06 1 .3.16.5.23.57.36.08.14.08.78-.15 1.46Z"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
};
