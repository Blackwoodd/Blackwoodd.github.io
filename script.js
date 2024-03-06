window.onload = () => {
    window.addEventListener("scroll", ()=> {

        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;
        let barre = (position / hauteur) * largeur;

        document.getElementById("scrollbarre").style.width = barre + "px";
    });
 };
 
 window.addEventListener('scroll', function() {
    var target = document.getElementById('target');
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if (targetPosition < screenPosition) {
        target.style.opacity = '1';
        target.classList.add('animate'); // Ajoutez une classe pour déclencher l'animation CSS
    } else {
        target.style.opacity = '0';
        target.classList.remove('animate'); // Supprimez la classe pour arrêter l'animation CSS
    }
});