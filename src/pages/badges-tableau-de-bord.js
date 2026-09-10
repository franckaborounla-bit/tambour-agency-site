module.exports = function () {
  return `
  <section class="section" style="padding-top:160px; padding-bottom:120px">
    <div class="container">
      <p id="dashLoading">Chargement de votre tableau de bord...</p>
      <div id="dashContent" style="display:none">
        <div class="section-head split" data-reveal>
          <div><p class="eyebrow">Tableau de bord</p><h1 id="dashGreeting">Bonjour</h1></div>
          <div style="display:flex; gap:12px; flex-wrap:wrap">
            <a href="/badges-nouvelle-campagne.html" class="btn btn-primary">Nouvelle campagne</a>
            <button id="logoutBtn" class="btn btn-outline" type="button">Déconnexion</button>
          </div>
        </div>
        <div class="grid-3" style="margin-bottom:40px">
          <div class="pole-card"><h3 id="statTotal" style="font-size:2rem; margin-bottom:6px">0</h3><p>Badges générés au total</p></div>
          <div class="pole-card"><h3 id="statCampaigns" style="font-size:2rem; margin-bottom:6px">0</h3><p>Campagnes actives</p></div>
        </div>
        <div id="campaignsList"></div>
      </div>
    </div>
  </section>
  <script>
  (function () {
    var loading = document.getElementById("dashLoading");
    var content = document.getElementById("dashContent");
    var greeting = document.getElementById("dashGreeting");
    var statTotal = document.getElementById("statTotal");
    var statCampaigns = document.getElementById("statCampaigns");
    var list = document.getElementById("campaignsList");
    var logoutBtn = document.getElementById("logoutBtn");

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function renderCampaigns(campaigns) {
      if (!campaigns.length) {
        list.innerHTML = '<p class="form-note">Vous n&#39;avez pas encore de campagne. Cr&eacute;ez-en une pour obtenir votre premier lien &agrave; partager.</p>';
        return;
      }
      var html = "";
      for (var i = 0; i < campaigns.length; i++) {
        var c = campaigns[i];
        var link = window.location.origin + "/b/" + c.slug;
        html += '<div class="pole-card" style="margin-bottom:18px; display:flex; flex-wrap:wrap; align-items:center; gap:18px">';
        html += '<img src="' + c.frameUrl + '" alt="" style="width:64px; height:64px; object-fit:cover; border-radius:12px; background:var(--cream)" />';
        html += '<div style="flex:1; min-width:220px">';
        html += '<h3 style="margin-bottom:6px">' + escapeHtml(c.name) + '</h3>';
        html += '<div style="display:flex; gap:8px; align-items:center">';
        html += '<input type="text" readonly value="' + escapeHtml(link) + '" style="flex:1; min-width:180px; font-size:.82rem; padding:8px 10px; border-radius:8px; border:1px solid var(--line); background:var(--cream)" />';
        html += '<button type="button" class="btn btn-outline copy-btn" data-link="' + escapeHtml(link) + '" style="padding:8px 16px; font-size:.82rem">Copier</button>';
        html += '</div></div>';
        html += '<div style="text-align:center; min-width:100px"><div style="font-size:1.6rem; font-weight:700">' + c.generations + '</div><div style="font-size:.75rem; color:var(--grey); text-transform:uppercase; letter-spacing:.08em">badges</div></div>';
        html += '</div>';
      }
      list.innerHTML = html;

      var copyBtns = list.querySelectorAll(".copy-btn");
      copyBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var link = btn.getAttribute("data-link");
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(function () {
              var original = btn.textContent;
              btn.textContent = "Copié !";
              setTimeout(function () { btn.textContent = original; }, 1500);
            });
          }
        });
      });
    }

    fetch("/api/auth/me", { credentials: "same-origin" })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.creator) {
          window.location.href = "/badges-connexion.html";
          return;
        }
        greeting.textContent = "Bonjour " + data.creator.name;
        return fetch("/api/dashboard", { credentials: "same-origin" }).then(function (r) { return r.json(); });
      })
      .then(function (dash) {
        if (!dash) return;
        statTotal.textContent = dash.totalGenerations;
        statCampaigns.textContent = dash.campaigns.length;
        renderCampaigns(dash.campaigns);
        loading.style.display = "none";
        content.style.display = "block";
      })
      .catch(function () {
        loading.textContent = "Une erreur est survenue. Merci de recharger la page.";
      });

    logoutBtn.addEventListener("click", function () {
      fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" }).then(function () {
        window.location.href = "/badges.html";
      });
    });
  })();
  </script>
  `;
};
