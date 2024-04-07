document.addEventListener("DOMContentLoaded", function() {
  // Sélectionner le footer et la barre de chargement
  var footer = document.querySelector("footer");
  var loadingBar = document.querySelector(".loading-bar");

  // Fonction pour mettre à jour la couleur de la barre de chargement en fonction du pourcentage de scrolling
  function updateLoadingBarColor() {
      var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      loadingBar.style.width = scrollPercentage + "%";
      // Changer la couleur en fonction du pourcentage de scrolling
      if (scrollPercentage < 25) {
          loadingBar.style.backgroundColor = "blue";
      } else if (scrollPercentage < 50) {
          loadingBar.style.backgroundColor = "green";
      } else if (scrollPercentage < 75) {
          loadingBar.style.backgroundColor = "orange";
      } else {
          loadingBar.style.backgroundColor = "red";
      }
  }

  // Mettre à jour la couleur de la barre de chargement lorsque la page est scrollée
  window.addEventListener("scroll", updateLoadingBarColor);

  // Appel initial pour mettre à jour la couleur de la barre de chargement au chargement de la page
  updateLoadingBarColor();
});
