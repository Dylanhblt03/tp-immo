Projet TpImmo - Guide de démarrage

1. Installation de l'environnement

Avant de commencer, assure-toi d'avoir Node.js et Angular CLI. Copie cette commande si tu ne l'as pas encore :

```bash
npm install -g @angular/cli

```
2. Récupérer et Initialiser le dépôt

Copie ces lignes une par une pour cloner et nettoyer le lien Git :

```bash
git clone https://github.com/VOTRE_DEPOT/tp-immo.git
```

```bash
cd tp-immo/
```

```bash
rm -rf .git
```

```bash
git init
```

3. Installation des dépendances

Cette commande va lire ton fichier package.json et installer tous les modules nécessaires (Bootstrap, Swiper, etc.) :

```bash
npm install
```

4. Lancer l'application

Pour démarrer le serveur de développement et ouvrir le projet dans ton navigateur :

```bash
ng serve --open
```

Commandes de développement Angular

Créer un nouveau composant

Si tu as besoin de créer la page de détails ou un autre module :

```bash
ng generate component components/nom-du-composant
```
Créer un service

Pour ajouter une nouvelle logique de données :

```bash
ng generate service services/nom-du-service
```

Compiler pour la production

Pour générer les fichiers finaux dans le dossier dist/ :


```bash
ng build
```

Structure Technique du Projet :

Framework : Angular 18+ 

État : Angular Signals 

Styles : SCSS & Bootstrap 5 

API : http://api-immobilier.osengo-tpdwwm-moulins.fr/documentation.php


