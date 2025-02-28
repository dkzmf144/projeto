// Função para alternar o menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Função para carregar casas dinamicamente
document.addEventListener('DOMContentLoaded', () => {
    const houseList = document.getElementById('house-list');
    
    const houses = [
        { name: "Casa Luxo", price: "R$ 750.000", img: "house1.jpg" },
        { name: "Casa Simples", price: "R$ 350.000", img: "house2.jpg" },
        { name: "Apartamento Moderno", price: "R$ 500.000", img: "house3.jpg" }
    ];
    
    houses.forEach(house => {
        const houseCard = document.createElement('div');
        houseCard.classList.add('house-card');
        houseCard.innerHTML = `
            <img src="${house.img}" alt="${house.name}">
            <h3>${house.name}</h3>
            <p>${house.price}</p>
            <button>Mais detalhes</button>
        `;
        houseList.appendChild(houseCard);
    });
});

// Função para filtrar casas
document.getElementById('price-filter').addEventListener('change', function() {
    const value = this.value;
    const allHouses = document.querySelectorAll('.house-card');
    allHouses.forEach(house => {
        const priceText = house.querySelector('p').textContent;
        const price = parseInt(priceText.replace(/\D/g, ''));
        if (
            (value === "low" && price > 300000) ||
            (value === "mid" && (price < 300000 || price > 700000)) ||
            (value === "high" && price < 700000)
        ) {
            house.style.display = "none";
        } else {
            house.style.display = "block";
        }
    });
});

// Função para enviar formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});