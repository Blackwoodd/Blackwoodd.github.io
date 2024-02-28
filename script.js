window.onload = () => {
    window.addEventListener("scroll", ()=> {

        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;
        let barre = (position / hauteur) * largeur;

        document.getElementById("scrollbarre").style.width = barre + "px";
    });
 };

 document.addEventListener("DOMContentLoaded", function() {
    var animationTrigger = document.querySelector(".animation-trigger");
    var triggerPosition = animationTrigger.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    function checkAnimation() {
        var windowTop = window.scrollY;
        if (windowTop + windowHeight > triggerPosition) {
            animationTrigger.classList.add("active");
        }
    }

    checkAnimation();

    window.addEventListener("scroll", function() {
        checkAnimation();
    });
});

/////////////////////////////////////////////////

const screen = document.querySelector('.screen');
let currentPage = 0;

function changePage() {
  currentPage++;
  if (currentPage > 2) {
    currentPage = 0;
  }
  const screenWidth = document.querySelector('.phone-frame').offsetWidth;
  screen.style.transform = `translateX(-${currentPage * screenWidth}px)`;
}

setInterval(changePage, 5000); // Change de page toutes les 5 secondes