document.addEventListener("DOMContentLoaded", function() {
    const afficherBtn = document.getElementById('afficherBtn');
    const cacherBtn = document.getElementById('cacherBtn');
    const citation = document.getElementById('citation');
  
    afficherBtn.addEventListener('click', function() {
      citation.style.display = 'block';
    });
  
    cacherBtn.addEventListener('click', function() {
      citation.style.display = 'none';
    });
  });
  