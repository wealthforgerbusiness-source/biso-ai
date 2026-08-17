# BISO AI — Backend

Serveur de base (Express) pour BISO AI.

## Installation

\`\`\`bash
cd backend
npm install
\`\`\`

## Configuration

Copiez le fichier `.env.example` en `.env` et remplissez les valeurs :

\`\`\`bash
cp .env.example .env
\`\`\`

## Lancer le serveur

\`\`\`bash
npm start
\`\`\`

Le serveur démarre par défaut sur le port défini dans `.env` (ou 5000 si absent).

## Route disponible

- `GET /api/health` → vérifie que le serveur est en ligne.
