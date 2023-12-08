'use strict';

// Code pour charger les cartes depuis l'API
async function loadCards() {
    try {
        const response = await fetch('http://localhost:3000/swiper/all-facts');
        const cards = await response.json();
        console.log(cards);
        // const cards = Object.values(testJson.Card);
        let i = 0;
        for (const card of cards) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.id = `${i + 1}`;
            cardElement.style.borderRadius = '10px';
            cardElement.style.borderWidth = '2px';
            cardElement.style.borderColor = `var(--base-theme-color-primary-dark)`;
            cardElement.innerHTML = `
            <div class="card-content">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
            `;

            cardElement.style.position = 'absolute';
            cardElement.style.left = 'auto';
            cardElement.style.right = 'auto';
            cardElement.style.zIndex = cards.length - i;
            cardElement.style.top = `${-i * 20}px`;
            cardElement.style.opacity = 1 - i * 0.2;
            document.querySelector('.cards').append(cardElement);
            i++;
        }
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    // Appelez la fonction pour charger les cartes au chargement de la page
    loadCards();
});