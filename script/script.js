// Seletor para a caixa de seleção do menu
var menuToggle = document.getElementById('menu__toggle');

// Seletor para todos os itens do menu
var menuItems = document.querySelectorAll('.menu__item');

// Função para fechar o menu
function fecharMenu() {
  menuToggle.checked = false;
}

// Adicionar evento de clique a cada item do menu
menuItems.forEach(function(item) {
  item.addEventListener('click', fecharMenu);
});
