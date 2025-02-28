// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    
    // Adiciona ou remove a classe 'open' para abrir ou fechar o menu
    menu.classList.toggle('open');
    content.classList.toggle('shifted');
}

// Função para fechar o menu ao clicar fora
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggleButton = document.getElementById('menu-toggle');
    
    // Verifica se o clique foi fora do menu e do botão de menu
    if (!menu.contains(event.target) && event.target !== menuToggleButton) {
        menu.classList.remove('open');
        document.getElementById('content').classList.remove('shifted');
    }
});
