'use strict';
const testJson = {
    "Card": {
        "Card1": {
            "Title": "Titre 1",
            "Text": "Text test 1",
        },
        "Card2": {
            "Title": "Titre 2",
            "Text": "Text test 2",
        },
        "Card3": {
            "Title": "Titre 3",
            "Text": "Text test 3",
        }
        // Ajoutez autant de cartes que nécessaire
    }
};
// Code pour charger les cartes depuis l'API
async function loadCards() {
    try {
        //const response = await fetch('http://localhost:3000/api/cards');
        //const cards = await response.json();
        const cards = Object.values(testJson.Card);
        let i = 0;
        for (const card of cards) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.id = `${i + 1}`;
            cardElement.innerHTML = `
            <div class="card-content">
                <h3>${card.Title}</h3>
                <p>${card.Text}</p>
            </div>
            `;

            cardElement.style.position = 'absolute';
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