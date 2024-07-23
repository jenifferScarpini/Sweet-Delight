function mudouTamanho(){
    if (window.innerWidth >= 768){
        nav-menu.style.display == 'flex';
    }else{
        nav-menu.style.display == 'none'
    }
}


function clickmenu() {
    if (nav-menu.style.display === 'block') {
        itens.style.display = 'none';
    }else {
        itens.style.display = 'block';
    }

}