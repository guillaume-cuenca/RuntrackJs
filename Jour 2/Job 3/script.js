document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le bouton et le paragraphe pour le compteur
    var button = document.getElementById("button");
    var compteur = document.getElementById("compteur");

    // Initialiser le compteur et les variables pour gérer l'accélération
    var count = 0;
    var interval;
    var delay = 200; // Délai initial entre les clics
    var accelerationFactor = 0.01; // Facteur d'accélération pour le maintien du clic (nouvelle valeur)
    var maxSpeed = 20; // Vitesse maximale d'accélération

    // Fonction pour incrémenter le compteur
    function addOne() {
      count++;
      compteur.textContent = count;
    }

    // Fonction pour accélérer les clics de façon exponentielle
    function accelerate() {
      clearInterval(interval); // Arrêter l'accélération actuelle
      interval = setInterval(function() {
        addOne();
        delay /= accelerationFactor; // Augmenter la vitesse à chaque intervalle
        delay = Math.max(delay, maxSpeed); // Limiter le délai à la vitesse maximale
      }, delay);
    }

    // Gestionnaire d'événement lorsque le bouton est enfoncé
    button.addEventListener("mousedown", accelerate);

    // Gestionnaire d'événement lorsque le bouton est relâché
    button.addEventListener("mouseup", function() {
      clearInterval(interval); // Arrêter l'accélération
      delay = 200; // Réinitialiser le délai à sa valeur initiale
    });

    // Gestionnaire d'événement pour les clics réguliers (fonction de base)
    button.addEventListener("click", addOne);
});
