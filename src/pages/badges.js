module.exports = function () {
  return `
  <section class="page-hero">
    <div class="container">
      <div class="crumb"><a href="/index.html" style="color:inherit">Accueil</a> / <a href="/evenementiel.html" style="color:inherit">Événementiel</a> / <b>Badges</b></div>
      <h1>Créez un cadre, partagez-le, récoltez les badges.</h1>
      <p class="lede">L'outil Tambour Agency pour vos campagnes événementielles : créez un cadre photo aux couleurs de votre événement, obtenez un lien à partager, et laissez chaque participant générer son propre badge en quelques secondes.</p>
      <div class="hero-actions">
        <a href="/badges-inscription.html" class="btn btn-primary">Créer mon compte gratuit</a>
        <a href="/badges-connexion.html" class="btn btn-outline">J'ai déjà un compte</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head center" data-reveal>
        <p class="eyebrow">Comment ça marche</p>
        <h2>Trois étapes, aucune compétence graphique requise</h2>
      </div>
      <div class="grid-3">
        <div class="pole-card" data-reveal><h3>1. Créez votre cadre</h3><p>Uploadez une image de cadre (PNG avec un espace transparent au centre) aux couleurs de votre événement, votre marque ou votre cause.</p></div>
        <div class="pole-card" data-reveal data-reveal-delay="1"><h3>2. Partagez le lien</h3><p>Chaque campagne obtient un lien unique à diffuser sur vos réseaux, par email ou lors de votre événement.</p></div>
        <div class="pole-card" data-reveal data-reveal-delay="2"><h3>3. Suivez l'impact</h3><p>Votre tableau de bord affiche en temps réel le nombre de badges générés pour chacune de vos campagnes.</p></div>
      </div>
      <p class="form-note" style="text-align:center; margin-top:30px">Génération gratuite et illimitée pendant la phase de lancement, avec un discret filigrane Tambour Agency sur chaque badge.</p>
    </div>
  </section>
  `;
};
