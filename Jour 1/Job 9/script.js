// Fonction de tri
function tri(numbers, order) {
    // Vérification de l'ordre de tri
    if (order === 'asc') {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === 'desc') {
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("L'ordre de tri doit être 'asc' ou 'desc'.");
    }

    // Retourner le tableau trié
    return numbers;
}

// Exemple d'utilisation
var numbers = [4, 2, 7, 1, 9];
var orderedNumbersAsc = tri(numbers.slice(), 'asc');
var orderedNumbersDesc = tri(numbers.slice(), 'desc');

console.log("Tableau trié par ordre ascendant:", orderedNumbersAsc);
console.log("Tableau trié par ordre descendant:", orderedNumbersDesc);
