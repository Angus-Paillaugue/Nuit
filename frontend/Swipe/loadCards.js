'use strict';

// Code pour charger les cartes depuis l'API
async function loadCards() {
    try {
        const response = await fetch('http://localhost:3000/api/cards');
        const cards = await response.json();
        for (const card of cards) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" />
            <div class="card-content">
                <h3>${card.Title}</h3>
                <p>${card.Text}</p>
            </div>
            `;
            document.querySelector('.cards').append(cardElement);
        }
    } catch (error) {
        console.error(error);
    }
}