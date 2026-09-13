module.exports = function () {
  return `
  <section class="section" style="padding-top:180px; padding-bottom:120px">
    <div class="container" style="max-width:480px">
      <div class="crumb"><a href="/badges.html" style="color:inherit">Badges</a> / <b>Inscription</b></div>
      <h1>Créer mon compte</h1>
      <p class="lede">Créez votre compte gratuit pour lancer vos campagnes de badges événementiels.</p>
      <form id="registerForm">
        <div class="field"><label for="r-name">Nom et prénom *</label><input id="r-name" type="text" required /></div>
        <div class="field"><label for="r-email">Email *</label><input id="r-email" type="email" required /></div>
        <div class="field"><label for="r-password">Mot de passe *</label><input id="r-password" type="password" required minlength="8" /></div>
        <p class="form-note">8 caractères minimum.</p>
        <div id="registerError" style="display:none; color:#E45327; margin-bottom:16px; font-size:.9rem"></div>
        <button type="submit" class="btn btn-primary btn-block">Créer mon compte</button>
      </form>
      <p class="form-note" style="margin-top:20px">Déjà un compte ? <a href="/badges-connexion.html" style="color:var(--orange)">Connectez-vous</a></p>
    </div>
  </section>
  <script>
  (function () {
    var form = document.getElementById("registerForm");
    var errorBox = document.getElementById("registerError");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      errorBox.style.display = "none";
      var name = document.getElementById("r-name").value;
      var email = document.getElementById("r-email").value;
      var password = document.getElementById("r-password").value;
      var btn = form.querySelector("button[type=submit]");
      var originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Création...";
      fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: password }),
        credentials: "same-origin",
      })
        .then(function (r) {
          return r.json().then(function (data) {
            return { ok: r.ok, data: data };
          });
        })
        .then(function (res) {
          if (!res.ok) throw new Error(res.data.error || "Une erreur est survenue.");
          window.location.href = "/badges-tableau-de-bord.html";
        })
        .catch(function (err) {
          errorBox.textContent = err.message;
          errorBox.style.display = "block";
          btn.disabled = false;
          btn.textContent = originalLabel;
        });
    });
  })();
  </script>
  `;
};
