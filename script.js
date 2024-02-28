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