// Fonction pour vérifier si une date est un jour férié en 2024
function CloseDay(date) {
    const joursFeries = [
        "01/01/2024", // Nouvel An
        "01/04/2024", // Lundi de Pâques
        "01/05/2024", // Fête du Travail
        "14/07/2024", // Fête Nationale
        "15/08/2024", // Assomption
        "01/11/2024", // Toussaint
        "25/12/2024"  // Noël
    ];

    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à 0, donc nous ajoutons 1
    var annee = date.getFullYear();

    // Assurez-vous que le jour et le mois sont toujours à deux chiffres
    if (jour < 10) jour = '0' + jour;
    if (mois < 10) mois = '0' + mois;

    var dateFormatee = jour + "/" + mois + "/" + annee;

    return joursFeries.includes(dateFormatee);
};


// Fonction pour vérifier si une date est un week-end
function Weekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
};

// Fonction jourTravaille
function WorkDay(date) {
    var jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

    var jour = date.getDate();
    var jourSemaine = jours[date.getDay()];
    var moisAnnee = mois[date.getMonth()];
    var annee = date.getFullYear();

    var dateFormatee = jourSemaine + " " + jour + " " + moisAnnee + " " + annee;
    var dateFormatee2 = jourSemaine + " " + jour + " " + moisAnnee + " " + annee;

    if (CloseDay(date)) {
        console.log("Le " + dateFormatee + " est un jour férié.");
    }
    
    else if (Weekend(date)) {
        console.log("Non, le " + dateFormatee + " est un week-end.");
    }
    
    else {
        console.log("Oui, le " + dateFormatee + " est un jour travaillé.");
    }
};

let jourTravaille = WorkDay;
console.log (jourTravaille(new Date("2024-04-01")))
console.log (jourTravaille(new Date("2022-06-09")))
console.log (jourTravaille(new Date("2022-06-25")))