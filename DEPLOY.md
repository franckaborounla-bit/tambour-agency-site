# Déploiement — tambouragency.com sur Cloudflare Pages

Ce dossier contient le site statique complet (`dist/`) et ses sources (`src/`, `build.js`, `build-run.js`).
Aucune étape de build n'est requise côté Cloudflare : `dist/` est déjà le site final, prêt à publier tel quel.

## Prérequis

- [Node.js](https://nodejs.org) installé (18+) — Wrangler fonctionne via `npx`, aucune installation globale n'est nécessaire.
- Un compte Cloudflare (gratuit) avec accès à **Cloudflare Pages**.

## Étape 1 — Connexion à votre compte Cloudflare

Dans un terminal, à la racine de ce dossier :

```bash
npx wrangler login
```

Une page s'ouvre dans votre navigateur : connectez-vous à votre compte Cloudflare et autorisez Wrangler.

## Étape 2 — Déploiement

```bash
npx wrangler pages deploy dist --project-name=tambour-agency
```

Wrangler crée automatiquement le projet Cloudflare Pages `tambour-agency` s'il n'existe pas, puis publie le contenu de `dist/`. Une URL de type `https://tambour-agency.pages.dev` est fournie immédiatement.

## Étape 3 — Brancher le domaine tambouragency.com

Dans le dashboard Cloudflare → Pages → tambour-agency → **Custom domains**, ajoutez `tambouragency.com` (et `www.tambouragency.com`). Si le domaine est déjà sur Cloudflare, le DNS se configure automatiquement ; sinon, suivez les instructions affichées pour pointer vos serveurs de noms vers Cloudflare.

## Mises à jour futures

Après toute modification du contenu (voir "Pour modifier le contenu" ci-dessous), relancez simplement :

```bash
node build-run.js
npx wrangler pages deploy dist --project-name=tambour-agency
```

---

## Pour modifier le contenu

- Le texte de chaque page se trouve dans `src/pages/*.js` (un fichier par page).
- Les couleurs, polices et styles sont dans `src/assets/css/style.css`.
- Les comportements (menu, animations, formulaires) sont dans `src/assets/js/main.js`.
- Après modification, régénérez le site avec `node build-run.js` (écrit dans `dist/`).

## Points à finaliser avant une mise en ligne publique définitive

Ce site a été construit avec des **placeholders premium** (visuel animé en page d'accueil à la place d'une vraie vidéo, textes et témoignages d'exemple, chiffres clés indicatifs) en attendant vos contenus réels. À remplacer avant lancement officiel :

1. **Vidéo hero** : remplacer le `<canvas id="heroCanvas">` (visuel animé "pulsation") par une balise `<video autoplay muted loop playsinline>` pointant vers votre vidéo définitive, une fois celle-ci produite/montée. Le code est commenté à cet effet dans `src/assets/js/main.js`.
2. **Textes et chiffres clés** : tous les textes ont été rédigés à partir du cahier des charges ; à relire/valider. Les chiffres clés (120+, 60+, etc.) et témoignages clients sont des exemples à remplacer par vos données réelles — ne pas publier de fausses statistiques ou faux témoignages.
3. **Coordonnées** : téléphone, adresse et carte Google Maps sont des placeholders (page Contact).
4. **Mentions légales / confidentialité** : trame indicative, à faire valider par un conseil juridique avant mise en ligne publique.
5. **Formulaires** : actuellement, les formulaires (contact, devis, demande de formation) valident côté navigateur et affichent un message de succès, **mais n'envoient aucun email réel** — ce site statique n'a pas de backend par défaut. Pour recevoir réellement les demandes, deux options :
   - **Cloudflare Pages Functions** : ajouter un dossier `functions/api/` avec une fonction qui relaie vers un service d'email (ex. Resend, SendGrid) — nécessite une clé API du service choisi.
   - **Service tiers clé en main** : brancher le `action` des formulaires sur un service comme Web3Forms ou Formspree (compte gratuit à créer, clé à intégrer dans `src/assets/js/main.js`).
6. **Logo** : un mark provisoire (favicon SVG) a été créé ; à remplacer par votre logo définitif une fois finalisé.
