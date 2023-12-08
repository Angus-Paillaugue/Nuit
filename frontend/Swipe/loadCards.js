'use strict';

// Code pour charger les cartes depuis l'API
async function loadCards() {
    try {
        const cards = [
            {
                "title" : "Les transports verts",
                "text" : "Donner la priorité à une mobilité sans voiture, en privilégiant la marche et le vélo par exemple.",
                "taux" : 0.13
            },
            {
                "title" : "Favoriser les trajets individuels",
                "text" : "Les voyages dans des transports individuels sont plus confortables, c'est l'essentiel.",
                "taux" : -0.35
            },
            {
                "title" : "Réduire les voyages en avion",
                "text" : "Limiter les voyages en avion sur de courtes distances et proposer davantage de voyage en trains",
                "taux" : 0.11
            },
            {
                "title" : "Devenir carnivore",
                "text" : "Consommer exclusivement de la viande animale",
                "taux" : -0.23
            },
            {
                "title" : "Devenir végan",
                "text" : "Consommer exclusivement de la nourriture de provenance végétale",
                "taux" : 0.06
            },
            {
                "title" : "Devenir végétarien",
                "text" : "Consommer exclusivement de la nourriture de provenance végétale",
                "taux" : 0.08
            },
            {
                "title" : "Le solaire",
                "text" : "Adopter l'énergie solaire dans des régions plus propice à une météo ensoleillée",
                "taux" : 0.10
            },
            {
                "title" : "L'éolien",
                "text" : "Adopter l'énergie éolien dans des régions plus propice à une météo venteuse",
                "taux" : 0.09
            },
            {
                "title" : "Le pétrole",
                "text" : "Etant la source d'énergie la plus utilisée au monde, il s'agit d'une bonne idée de l'utiliser",
                "taux" : -0.24
            },
            {
                "title" : "Remplacement par le nucléaire",
                "text" : "Le bilan carbonne du nucléaire est bien moindre que celle du charbon et du pétrole",
                "taux" : 0.07
            },
            {
                "title" : "Les élevages durables",
                "text" : "Reproduire un cycle de la matière organique, comme cela se passe dans un écosystème, assurant son autonomie et sa durabilité",
                "taux" : 0.07
            },
            {
                "title" : "Les élevages industriels",
                "text" : "Destruction de la biodiversité et déforestation, émissions de gaz à effet de serre et changements climatiquesmais aussi souvent cruauté animale et impacts néfastes sur la santé humaine",
                "taux" : -0.21
            },
            {
                "title" : "Les transports ferroviaires",
                "text" : "Investir 3 milliards d'euros par an dans les services ferroviaires",
                "taux" : 0.09
            },
            {
                "title" : "Les vélos",
                "text" : "Investir 500 millions d'euros par an dans les services de vélos",
                "taux" : 0.11
            },
            {
                "title" : "Les voitures électriques",
                "text" : "Les voitures électriques contribuent à réduire la pollution atmosphérique et libèrent beaucoup moins d’émissions de gaz à effet de serre que les véhicules à moteur essence ou diesel.",
                "taux" : 0.06
            },
            {
                "title" : "Chauffage",
                "text" : "Investir massivement dans la fabrique de climatisateur",
                "taux" : -0.15
            },
            {
                "title" : "Isolation",
                "text" : "L'isolation écologique permet de lutter contre le réchauffement climatique et faire des économies d'énergie",
                "taux" : 0.05
            },
            {
                "title" : "Importations",
                "text" : "Prioriser l'importation de ressource provenant de divers pays",
                "taux" : -0.32
            },
            {
                "title" : "Déforestation",
                "text" : "Les arbres représentent un danger pour l'environnement",
                "taux" : -0.46
            }
        ]
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
                <label hidden= "true">${card.taux*100}</label>
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