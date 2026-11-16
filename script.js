// Numéro WhatsApp (indicatif Côte d'Ivoire 225 + numéro)
const NUMERO_WHATSAPP = "2250564677033";

/**
 * @param {string} texte
 */
function lienWhatsApp(texte) {
  return "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texte);
}

// Menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
});

// Fermer le menu après un clic sur un lien
nav.querySelectorAll("a").forEach(function (lien) {
  lien.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

// Boutons WhatsApp
document.getElementById("btn-commander").href = lienWhatsApp(
  "Bonjour Skys Resto, je souhaite passer une commande."
);
document.getElementById("btn-contact").href = lienWhatsApp(
  "Bonjour Skys Resto , j'aimerais avoir des informations."
);

// Formulaire de commande -> message WhatsApp
document.getElementById("form-commande").addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const plat = document.getElementById("plat").value;
  const message = document.getElementById("message").value.trim();

  let texte = "Bonjour Skys Resto, \n";
  texte += "Nom : " + nom + "\n";
  texte += "Plat : " + plat + "\n";
  if (message) {
    texte += "Précisions : " + message;
  }

  window.open(lienWhatsApp(texte), "_blank");
});

// Année dans le pied de page
document.getElementById("annee").textContent = new Date().getFullYear();