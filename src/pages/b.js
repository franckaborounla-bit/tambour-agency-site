module.exports = function () {
  return `
  <section class="section" style="padding-top:160px; padding-bottom:120px">
    <div class="container" style="max-width:560px">
      <p id="bLoading">Chargement de la campagne...</p>
      <div id="bError" style="display:none">
        <h1>Campagne introuvable</h1>
        <p class="lede">Ce lien ne correspond à aucune campagne active. Vérifiez qu'il a été copié en entier, ou demandez un nouveau lien à son créateur.</p>
        <a href="/badges.html" class="btn btn-primary">Découvrir l'outil de badges</a>
      </div>
      <div id="bContent" style="display:none">
        <div class="crumb"><a href="/badges.html" style="color:inherit">Badges</a> / <b id="bCrumbName">Campagne</b></div>
        <h1 id="bTitle">Créez votre badge</h1>
        <p class="lede">Uploadez votre photo, ajustez-la dans le cadre avec le zoom et en la faisant glisser, puis téléchargez votre badge.</p>

        <div style="display:flex; justify-content:center; margin:26px 0">
          <canvas id="bCanvas" width="1000" height="1000" style="width:100%; max-width:420px; aspect-ratio:1/1; border-radius:16px; background:var(--cream); touch-action:none; cursor:grab"></canvas>
        </div>

        <div class="field"><label for="bPhoto">Votre photo *</label><input id="bPhoto" type="file" accept="image/png,image/jpeg,image/webp" /></div>

        <div id="bControls" style="display:none">
          <label class="form-note" style="display:block; margin-bottom:6px">Zoom</label>
          <input id="bZoom" type="range" min="100" max="250" value="100" style="width:100%; margin-bottom:20px" />
          <p class="form-note" style="margin-bottom:20px">Glissez la photo dans le cadre pour la repositionner.</p>
        </div>

        <button id="bDownload" class="btn btn-primary btn-block" disabled>Télécharger mon badge</button>
      </div>
    </div>
  </section>
  <script src="/assets/js/badge-generator.js" defer></script>
  `;
};
