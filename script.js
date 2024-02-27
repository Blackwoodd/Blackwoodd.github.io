// Détection du défilement de la page
window.addEventListener("scroll", function() {
    var terminal = document.querySelector(".terminal");
    var content = document.querySelector(".content");
    var scrollPosition = window.scrollY;
  
    // Si la position de défilement atteint la fin du terminal
    if (scrollPosition >= terminal.offsetHeight) {
      // Ajouter la classe pour activer l'effet de zoom
      terminal.classList.add("zoom-effect", "zoomed");
      // Supprimer la classe après un court délai pour permettre l'effet de zoom
      setTimeout(function() {
        terminal.classList.remove("zoom-effect");
      }, 1000);
    }
  });
  