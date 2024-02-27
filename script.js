document.addEventListener("DOMContentLoaded", function() {
    var animationTrigger = document.querySelector(".animation-trigger");
    var titreApplication = document.querySelector(".titre_application");
    var animationTriggerPosition = animationTrigger.offsetTop;
    var windowHeight = window.innerHeight;
  
    function checkAnimation() {
      var windowTop = window.scrollY;
      if (windowTop + windowHeight > animationTriggerPosition) {
        animationTrigger.classList.add("active");
      }
    }
  
    checkAnimation(); // Vérifie l'animation lors du chargement initial
    window.addEventListener("scroll", checkAnimation); // Vérifie l'animation lors du défilement
  });