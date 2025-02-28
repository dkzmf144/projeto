// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    
    // Adiciona ou remove a classe 'open' para abrir ou fechar o menu
    menu.classList.toggle('open');
    content.classList.toggle('shifted');
}
