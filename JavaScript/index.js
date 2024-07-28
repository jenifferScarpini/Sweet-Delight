function clickMenu() {
    var navMenu = document.getElementById('nav-menu'); // Seleciona o elemento correto
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}