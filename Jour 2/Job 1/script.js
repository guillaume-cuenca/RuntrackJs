function citation() {
    // Récupérer l'élément avec l'ID "citation"
    var citationElement = document.getElementById("citation");
    
    // Vérifier si l'élément existe
    if (citationElement) {
      // Récupérer le texte contenu dans l'élément
      var citationText = citationElement.textContent.trim();
      
      // Afficher la citation dans la console
      console.log(citationText);
    } else {
      console.error("L'élément avec l'ID 'citation' n'existe pas.");
    }
  }
  
  // Ajouter un écouteur d'événements sur le bouton
  document.getElementById("button").addEventListener("click", citation);
  