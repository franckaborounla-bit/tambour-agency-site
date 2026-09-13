module.exports = function () {
  return `
  <section class="section" style="padding-top:160px; padding-bottom:120px">
    <div class="container" style="max-width:560px">
      <p id="ncLoading">Vérification de votre session...</p>
      <div id="ncContent" style="display:none">
        <div class="crumb"><a href="/badges-tableau-de-bord.html" style="color:inherit">Tableau de bord</a> / <b>Nouvelle campagne</b></div>
        <h1>Créer une nouvelle campagne</h1>
        <p class="lede">Uploadez votre cadre (idéalement un PNG avec un espace transparent au centre) et donnez un nom à votre campagne.</p>
        <form id="campaignForm">
          <div class="field"><label for="c-name">Nom de la campagne *</label><input id="c-name" type="text" required placeholder="Ex. Gala Tambour 2026" /></div>
          <div class="field">
            <label for="c-frame">Image du cadre (PNG, JPEG ou WEBP, 6 Mo max) *</label>
            <input id="c-frame" type="file" accept="image/png,image/jpeg,image/webp" required />
          </div>
          <div id="ncPreview" style="display:none; margin:16px 0"><img id="ncPreviewImg" alt="Aperçu du cadre" style="max-width:220px; border-radius:12px; border:1px solid var(--line)" /></div>
          <div id="ncError" style="display:none; color:#E45327; margin-bottom:16px; font-size:.9rem"></div>
          <button type="submit" class="btn btn-primary btn-block">Créer la campagne</button>
        </form>

        <div id="ncSuccess" style="display:none">
          <h2>Votre campagne est prête !</h2>
          <p class="lede" id="ncSuccessName"></p>
          <div class="field"><label>Lien à partager</label><input id="ncLink" type="text" readonly style="width:100%; padding:12px 14px; border-radius:8px; border:1px solid var(--line); background:var(--cream)" /></div>
          <a href="/badges-tableau-de-bord.html" class="btn btn-primary" style="margin-top:16px">Retour au tableau de bord</a>
        </div>
      </div>
    </div>
  </section>
  <script>
  (function () {
    var loading = document.getElementById("ncLoading");
    var content = document.getElementById("ncContent");
    var form = document.getElementById("campaignForm");
    var errorBox = document.getElementById("ncError");
    var fileInput = document.getElementById("c-frame");
    var preview = document.getElementById("ncPreview");
    var previewImg = document.getElementById("ncPreviewImg");
    var successBox = document.getElementById("ncSuccess");
    var successName = document.getElementById("ncSuccessName");
    var linkInput = document.getElementById("ncLink");

    fetch("/api/auth/me", { credentials: "same-origin" })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.creator) {
          window.location.href = "/badges-connexion.html";
          return;
        }
        loading.style.display = "none";
        content.style.display = "block";
      });

    fileInput.addEventListener("change", function () {
      var file = fileInput.files[0];
      if (!file) { preview.style.display = "none"; return; }
      previewImg.src = URL.createObjectURL(file);
      preview.style.display = "block";
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      errorBox.style.display = "none";
      var name = document.getElementById("c-name").value;
      var file = fileInput.files[0];
      if (!file) {
        errorBox.textContent = "Merci de sélectionner une image de cadre.";
        errorBox.style.display = "block";
        return;
      }
      var fd = new FormData();
      fd.append("name", name);
      fd.append("frame", file);

      var btn = form.querySelector("button[type=submit]");
      var originalLabel = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Création...";

      fetch("/api/campaigns", { method: "POST", body: fd, credentials: "same-origin" })
        .then(function (r) {
          return r.json().then(function (data) {
            return { ok: r.ok, data: data };
          });
        })
        .then(function (res) {
          if (!res.ok) throw new Error(res.data.error || "Une erreur est survenue.");
          var link = window.location.origin + "/b/" + res.data.slug;
          successName.textContent = "Campagne : " + res.data.name;
          linkInput.value = link;
          form.style.display = "none";
          successBox.style.display = "block";
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
