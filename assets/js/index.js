const btn = document.getElementById("menu-button");
const menu = document.getElementById("menu");



btn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
});

document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out', 
        once: false, 
    });
});


document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', '../../particlesjs-config.json', function() {
      });
});


