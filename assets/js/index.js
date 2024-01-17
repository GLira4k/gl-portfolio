const btn = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const particlesjs = document.getElementById("#particles-js");

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

particlesjs.load('particles-js', '../particlesjs-config.json', function() {
    console.log('callback - particles-js config loaded');
  });