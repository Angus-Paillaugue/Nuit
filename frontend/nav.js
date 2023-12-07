const scoreEl = document.getElementById("userScore");
const coinsEl = document.getElementById("userCoins");
const hamburgerButton = document.getElementById("hamburgerButton");
const dropdown = document.getElementById("dropdown");


const updateScoreInNavBar = () => {
    scoreEl.innerText = localStorage.getItem("score") || 0;
    coinsEl.innerText = localStorage.getItem("coins") || 0;
}

hamburgerButton.addEventListener("click", () => {
  dropdown.classList.toggle("opacity-0");
  dropdown.classList.toggle("opacity-100");
  dropdown.classList.toggle("z-50");
  dropdown.classList.toggle("-z-10");
});

updateScoreInNavBar();