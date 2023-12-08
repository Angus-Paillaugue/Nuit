document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.querySelector(".game-container");
    const fruit = document.querySelector(".fruit");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    const fruitsList = [
        "./ressources/centrale-gaz.png",
        "./ressources/charbon.png",
        "./ressources/plateforme-petroliere.png",
        "./ressources/pompe-essence.png",
        "./ressources/puit-petrole.png",
        "./ressources/usine.png"
    ];

    const badList = [
				"./ressources/centrale-eau.png",
				"./ressources/centrale-nucleaire.png",
				"./ressources/eolienne.png",
				"./ressources/panneau-solaire.png"
    	];

    fruit.addEventListener("click", sliceFruit);

    function sliceFruit() {
    	if (fruitsList.includes(fruit.getAttribute("src"))) {
        fruit.style.display = "none";
        score += 10;
        scoreDisplay.textContent = score;
      }else{
      	fruit.style.display = "none";
      	score -=10;
      	scoreDisplay.textContent = score;
      }
    }
    function getRandomInt(min, max) {
		  min = Math.ceil(min);
		  max = Math.floor(max);
		  return Math.floor(Math.random() * (max - min) + min);
		}

    function launchFruit() {
    		const r = Math.random();
    		if (r<0.5) {
    			const randomFruitIndex = Math.floor(Math.random() * fruitsList.length);
      		const selectedFruit = fruitsList[randomFruitIndex];
      		fruit.src = selectedFruit;
    		}else{
    			const randomBadIndex = Math.floor(Math.random() * badList.length);
      		const selectedBad = badList[randomBadIndex];
      		fruit.src = selectedBad;
    		}

    			fruit.style.display = "block";
	        fruit.style.left = `${Math.random() * (gameContainer.offsetWidth - fruit.offsetWidth)}px`;
	        fruit.style.bottom = `${gameContainer.offsetHeight - fruit.offsetHeight}px`;

        const curveStartTime = Date.now();
        const curveDuration = getRandomInt(1700,4000);

        function updateFruitPosition() {
 
            const currentTime = Date.now() - curveStartTime;
            const progress = currentTime / curveDuration;
            const curveEndY = 0;

            const currentY = quadra(400, progress)

            fruit.style.bottom = `${currentY}px`;

            if (progress < 1 ) {
                requestAnimationFrame(updateFruitPosition);
            } else {
                fruit.style.display = "none";
                launchFruit();
            }
        }

        updateFruitPosition();
    }

    function quadra(height, progress) {
    	return height-Math.pow(-Math.sqrt(height)+(Math.sqrt(height)*2*progress),2);
    }

    launchFruit();
});