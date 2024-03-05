window.onload = () => {
    window.addEventListener("scroll", ()=> {

        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;
        let barre = (position / hauteur) * largeur;

        document.getElementById("scrollbarre").style.width = barre + "px";
    });
 };

 const words = document.querySelectorAll('.word');

 words.forEach((word, index) => {
   const delay = parseFloat(word.style.getPropertyValue('--delay')) * 1000; // Convertit le délai en millisecondes
   setTimeout(() => {
     word.style.transform = 'translateY(100%)'; // Déplace le mot vers le bas
   }, delay);
 });
 
