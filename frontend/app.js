// ===== Configuration =====
// Adapter cette URL selon l'environnement (local ou Render)
const API_BASE_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "https://REMPLACER_PAR_URL_RENDER";

// ===== Éléments DOM =====
const statusLabel = document.getElementById("statusLabel");
const statusDot = document.getElementById("statusDot");
const checkHealthBtn = document.getElementById("checkHealthBtn");
const yearEl = document.getElementById("year");
const langButtons = document.querySelectorAll(".lang-btn");
const installCard = document.getElementById("installCard");
const installBtn = document.getElementById("installBtn");

// ===== Année dans le footer =====
yearEl.textContent = new Date().getFullYear();

// ===== Vérification du backend =====
async function checkHealth() {
  statusLabel.textContent = "Vérification du serveur…";
  statusDot.className = "dot dot-pending";

  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    if (!response.ok) throw new Error("Réponse non valide");

    const data = await response.json();

    if (data && data.success) {
      statusLabel.textContent = `Serveur en ligne (${data.service})`;
      statusDot.className = "dot dot-success";
    } else {
      throw new Error("Statut inattendu");
    }
  } catch (error) {
    statusLabel.textContent = "Serveur injoignable";
    statusDot.className = "dot dot-error";
  }
}

checkHealthBtn.addEventListener("click", checkHealth);

// Vérification automatique au chargement
checkHealth();

// ===== Changement de langue (interface simple, sans traduction complète) =====
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    langButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // La traduction complète sera ajoutée dans une prochaine étape
  });
});

// ===== Service Worker (PWA) =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .catch((err) => console.error("Échec d'enregistrement du Service Worker :", err));
  });
}

// ===== Installation PWA =====
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installCard.hidden = false;
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installCard.hidden = true;
});

window.addEventListener("appinstalled", () => {
  installCard.hidden = true;
});
