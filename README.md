

## Installation

    Cloner le projet depuis votre dépôt GitHub après avoir fait un fork :

git clone https://github.com/votre-nom/fini.git

##  Installer les dépendances :

pnpm install

##  Initialiser votre branche :

git branch -M "nom-de-votre-branche"

## Relier ton dépôt local au projet initial

git remote add upstream https://github.com/landourenech/fini.git

## Pour voir les routes

git remote -v

##   Envoyer votre travail vers GitHub :

git add .
git commit -m "Votre message de commit"
pnpm build
git pull origin develop // pour récupérer la branche develop
git push -u origin "nom-de-votre-branche" // pour envoyer vers votre dépôt

ou, pour envoyer directement vers le dépôt principal :

git push -u upstream develop // pour envoyer au chef de projet

## Notes :

    - Utilise des noms de branches sans espace (ex: feature/ma-fonctionnalite).

    - Sois clair dans tes messages de commit (ex: feat: ajout de la page d'accueil).

    - Si tu travailles avec un dépôt principal (upstream) en plus de ton fork (origin), assure-toi d'avoir bien configuré ton remote upstream.