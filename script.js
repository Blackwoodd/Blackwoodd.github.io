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
    var sections = document.querySelectorAll(".animation-trigger");

    function checkAnimation() {
        sections.forEach(function(section) {
            var position = section.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            if (position < windowHeight * 0.8) {
                section.classList.add("animate");
            } else {
                section.classList.remove("animate");
            }
        });
    }

    checkAnimation();
    window.addEventListener("scroll", checkAnimation);
});
