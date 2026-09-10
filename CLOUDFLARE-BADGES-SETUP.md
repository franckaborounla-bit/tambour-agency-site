# Configuration Cloudflare pour l'outil de badges

L'outil de badges (comptes créateurs, campagnes, compteur de générations)
a besoin de deux ressources Cloudflare qui n'existent pas encore sur ton
projet : une base de données **D1** et un espace de stockage **R2**. Ce
sont des services Cloudflare gratuits jusqu'à un volume confortable, et
comme ton site est déjà hébergé sur Cloudflare Pages, il n'y a rien de
nouveau à payer ni à héberger ailleurs.

Cette configuration se fait une seule fois, directement sur le tableau
de bord Cloudflare (dash.cloudflare.com), pas dans PowerShell. Suis les
étapes dans l'ordre.

## 1. Créer la base de données D1

1. Va sur dash.cloudflare.com et ouvre **Workers & Pages** dans le menu de gauche.
2. Dans l'onglet **D1 SQL Database** (ou **Stockage et bases de données > D1**), clique sur **Créer une base de données**.
3. Nomme-la `tambour-badges` puis valide.
4. Une fois la base créée, ouvre-la et va dans l'onglet **Console** (ou **Query**).
5. Colle le contenu du fichier `schema.sql` (fourni dans le zip de déploiement) dans l'éditeur, puis exécute-le. Tu dois voir 4 tables créées : `creators`, `campaigns`, `generations`, `sessions`.

## 2. Créer l'espace de stockage R2

1. Toujours sur dash.cloudflare.com, ouvre **R2** dans le menu de gauche (active R2 si c'est la première fois, un plan gratuit suffit).
2. Clique sur **Créer un bucket**, nomme-le `tambour-frames`, région automatique, puis valide.
3. Rien d'autre à faire ici : pas besoin d'activer l'accès public, l'image des cadres est servie par le site lui-même.

## 3. Relier D1 et R2 au projet Pages

1. Ouvre ton projet **tambour-agency-site** dans Workers & Pages.
2. Va dans **Settings** (Paramètres) puis **Functions**.
3. Section **D1 database bindings** : clique sur **Add binding**.
   - Variable name : `DB`
   - D1 database : `tambour-badges`
   - Fais cette étape pour l'environnement **Production** ET pour l'environnement **Preview** (deux ajouts, un par environnement), car le site tourne à la fois sur `main` (production) et `dev` (preview).
4. Section **R2 bucket bindings** : clique sur **Add binding**.
   - Variable name : `FRAMES`
   - R2 bucket : `tambour-frames`
   - Là aussi, ajoute la liaison pour **Production** et pour **Preview**.
5. Enregistre.

## 4. Redéployer

Les liaisons ne s'appliquent qu'aux déploiements créés après leur ajout.
Après avoir poussé le code de l'outil de badges sur `dev` (voir le zip),
le déploiement automatique suivant prendra en compte `DB` et `FRAMES`.
Si jamais un test échoue avec une erreur liée à `DB` ou `FRAMES`, ouvre
l'onglet **Deployments** du projet et relance le dernier déploiement
(**Retry deployment**) après avoir bien vérifié les liaisons ci-dessus.

## Variables d'environnement utilisées par le code

| Nom      | Type              | Rôle                                              |
|----------|-------------------|----------------------------------------------------|
| `DB`     | Liaison D1        | Comptes créateurs, campagnes, sessions, compteurs  |
| `FRAMES` | Liaison R2 bucket | Stockage des images de cadres uploadées            |

Ces noms (`DB` et `FRAMES`) doivent correspondre exactement à ce qui est
utilisé dans le code (`functions/`), respecte donc la casse en majuscules
lors de la création des liaisons.

## Une fois que c'est fait

Dis-le-moi et on testera ensemble : création d'un compte créateur, création
d'une campagne avec upload d'un cadre, puis génération d'un badge depuis le
lien public `/b/nom-de-la-campagne`.
