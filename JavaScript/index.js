


function clickMenu() {
    const header = document.querySelector('header');
    const navMenu = document.querySelector('#nav-menu');
    
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex';
        header.classList.add('show-menu');
    } else {
        navMenu.style.display = 'none';
        header.classList.remove('show-menu');
    }
}


// Cria um array para armazenar os itens do carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Função para adicionar item ao carrinho
function addToCart(product) {
    // Adiciona o produto ao array do carrinho
    cart.push(product);
    // Atualiza o localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} foi adicionado ao carrinho!`);
}

// Função para exibir o conteúdo do carrinho
function showCart() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartHTML = '';
    
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            cartHTML += `<p>${item.name} - R$${item.price}</p>`;
        });
    } else {
        cartHTML += '<p>O carrinho está vazio.</p>';
    }
    
    // Atualiza o conteúdo do modal com os itens do carrinho
    document.getElementById('cart-items').innerHTML = cartHTML;
    document.getElementById('cart-modal').style.display = 'block';
}

// Função para fechar o modal do carrinho
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Adiciona ouvintes de eventos aos botões de adicionar ao carrinho
document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', function() {
        let productName = this.getAttribute('data-name');
        let productPrice = this.getAttribute('data-price');
        addToCart({ name: productName, price: productPrice });
    });
});

// Adiciona ouvintes de eventos ao ícone do carrinho
document.getElementById('carrinho').addEventListener('click', showCart);
