const btn = document.getElementById("menu-button");
const menu = document.getElementById("menu");



btn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800, // Duração da animação em milissegundos
        easing: 'ease-in-out', // Tipo de animação
        once: false, // A animação ocorrerá apenas uma vez
    });
});


document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', '../../particlesjs-config.json', function() {
      });
});


