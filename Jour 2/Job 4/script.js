document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le textarea
    var keylogger = document.getElementById("keylogger");

    // Ajouter un écouteur d'événement pour capturer les frappes de clavier
    document.addEventListener("keydown", function(event) {
        // Récupérer la touche tapée
        var keyPressed = event.key;

        // Vérifier si la touche est la touche "Entrée"
        if (keyPressed === "Enter") {
            // Empêcher le comportement par défaut du navigateur
            event.preventDefault();

            // Obtenir la position du curseur
            var cursorPosition = keylogger.selectionStart;

            // Obtenir le contenu avant et après le curseur
            var beforeCursor = keylogger.value.substring(0, cursorPosition);
            var afterCursor = keylogger.value.substring(cursorPosition);

            // Ajouter un saut de ligne au contenu du textarea
            if (cursorPosition < keylogger.value.length && cursorPosition > 0) {
                // Si le curseur est entre deux caractères
                keylogger.value = beforeCursor + "\n" + afterCursor;
            } else {
                // Si le curseur est en fin de ligne
                keylogger.value = beforeCursor + "\n";
            }

            // Déplacer le curseur à la nouvelle position
            keylogger.selectionStart = keylogger.selectionEnd = cursorPosition + 1;
        }
    });
});
