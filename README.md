# MANATI — Les gardiens des villes

Jeu de plateforme 2D à défilement horizontal, conçu pour PC et smartphone avec React, TypeScript, Vite et Canvas 2D.

## Démarrer

```bash
npm install
npm run dev
```

## Compiler

```bash
npm run build
npm run preview
```

Vercel : commande de build `npm run build`, dossier de sortie `dist`.

## Commandes

- PC : flèches ou A/D pour courir, Espace pour sauter, E pour le pouvoir, Q pour appeler un héros.
- Mobile : boutons tactiles à l’écran.
- Pause : bouton en haut à droite.

L’âge du joueur est indépendant de l’âge des personnages et règle le nombre d’ennemis et d’obstacles. Nathan a 4 ans, Timéo 9 ans et Nicolas 15 ans. La progression est enregistrée dans le navigateur.

Les missions utilisent des parcours générés avec rues, plateformes, caisses, pièces, ennemis, pointes, checkpoints et portails dans des villes terrestres. Les tenues donnent des pouvoirs distincts et trois alliés aléatoires peuvent être appelés.
