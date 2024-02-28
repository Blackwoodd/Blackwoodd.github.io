document.addEventListener("DOMContentLoaded", function() {
    var animationTrigger = document.querySelector(".animation-trigger");
    var titreApplication = document.querySelector(".titre_application");
    var animationTriggerPosition = animationTrigger.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    function checkAnimation() {
      var windowTop = window.scrollY;
      if (windowTop + windowHeight > animationTriggerPosition) {
        animationTrigger.classList.add("active");
      }
    }
  
    checkAnimation();
    window.addEventListener("scroll", checkAnimation);
  });

  document.addEventListener("DOMContentLoaded", function() {
    var scrollbar = document.getElementById("scrollbar");
  
    function updateScrollbar() {
      var windowHeight = window.innerHeight;
      var pageHeight = document.body.clientHeight;
      var scrollTop = window.scrollY;
      var scrollbarWidth = (scrollTop / (pageHeight - windowHeight)) * 100;
      scrollbar.style.width = scrollbarWidth + "%";
    }
  
    updateScrollbar();
  
    window.addEventListener("scroll", function() {
      updateScrollbar();
    });
  
    window.addEventListener("resize", function() {
      updateScrollbar();
    });
  });
  