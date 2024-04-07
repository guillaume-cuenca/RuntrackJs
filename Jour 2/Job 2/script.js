function showhide() {
    var article = document.getElementById("article");
  
    // Vérifier si l'article existe déjà
    if (article) {
      // S'il existe, le supprimer
      article.parentNode.removeChild(article);
    } else {
      // S'il n'existe pas, le créer et l'ajouter à la page
      var newArticle = document.createElement("article");
      newArticle.id = "article";
      newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
      document.body.appendChild(newArticle);
    }
  }  