const botao_mobile = document.getElementById('botao_mobile');

function toggleMenu() {
const menu = document.getElementById('menu');
nav.classList.toggle('active');
}

botao_mobile.addEventListener('click', toggleMenu);