// Fonction pour afficher les jours de la semaine
function afficherJoursSemaines() {
    // Tableau des jours de la semaine
    var joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Boucle pour afficher les jours de la semaine
    for (var i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

// Appel de la fonction pour afficher les jours de la semaine
window.onload = function() {
    afficherJoursSemaines();
};