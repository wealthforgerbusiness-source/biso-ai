# BISO AI

**BISO AI** est une PWA d'intelligence artificielle conçue en priorité pour la RDC.

Slogan : *L'intelligence qui comprend la RDC.*

Langues initiales : Français 🇫🇷 et Lingala 🇨🇩

## État du projet

Ceci est la **base technique** du projet. Les fonctionnalités suivantes seront ajoutées dans les prochaines étapes :

- Inscription / connexion complètes
- Intégration Gemini API
- Base de données MongoDB
- Système de quotas utilisateur
- Chat fonctionnel
- Dashboard complet
- Intégration Chariow (paiement)

## Structure du projet

\`\`\`
biso-ai/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── manifest.json
│   └── sw.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md
\`\`\`

## Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript moderne, PWA
- **Backend** : Node.js + Express
- **Base de données (prévue)** : MongoDB
- **IA (prévue)** : Gemini API
- **Hébergement (prévu)** : Render

## Lancer le frontend

Ouvrez simplement `frontend/index.html` dans un navigateur, ou servez le dossier avec un petit serveur local (ex. l'extension "Live Server" de VS Code).

## Lancer le backend

\`\`\`bash
cd backend
npm install
cp .env.example .env
npm start
\`\`\`

## Variables d'environnement nécessaires (backend/.env)

\`\`\`
PORT=
MONGODB_URI=
GEMINI_API_KEY=
\`\`\`

Aucune valeur réelle n'est incluse dans ce dépôt.
