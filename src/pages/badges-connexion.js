module.exports = function () {
  return `
  <section class="section" style="padding-top:180px; padding-bottom:120px">
    <div class="container" style="max-width:480px">
      <div class="crumb"><a href="/badges.html" style="color:inherit">Badges</a> / <b>Connexion</b></div>
      <h1>Connexion</h1>
      <p class="lede">Accédez à votre tableau de bord pour gérer vos campagnes de badges.</p>
      <form id="loginForm">
        <div class="field"><label for="l-email">Email *</label><input id="l-email" type="email" required /></div>
        <div class="field"><label for="l-password">Mot de passe *</label><input id="l-password" type="password" required /></div>
        <div id="loginError" style="display:none; color:#E45327; margin-bottom:16px; font-size:.9rem"></div>
        <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
      </form>
      <p class="form-note" style="margin-top:20px">Pas encore de compte ? <a href="/badges-inscription.html" style="color:var(--orange)">Créez-en un</a></p>
    </div>
  </section>
  <script>
  (function () {
    var form = document.getElementById("loginForm");
    var errorBox = document.getElementById("loginError");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      errorBox.style.display = "none";
      var email = document.getElementById("l-email").value;
      var password = document.getElementById("l-password").value;
      var btn = form.querySelector("button[type=submit]");
      var originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Connexion...";
      fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
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
