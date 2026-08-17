require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(express.json());

// ===== Routes =====
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "BISO AI",
    status: "online"
  });
});

// Route racine simple
app.get("/", (req, res) => {
  res.send("BISO AI backend en fonctionnement.");
});

// ===== Démarrage du serveur =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`BISO AI backend démarré sur le port ${PORT}`);
});
