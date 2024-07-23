document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');

    menu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

function mudouTamanho() {
    const navMenu = document.getElementById('nav-menu');
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}
