// Make the DIV element draggable:
document.getElementById("yesButton").addEventListener("click", onClick);
document.getElementById("noButton").addEventListener("click", onClick);

function getCurrentCard() {
    return Array.from(document.getElementsByClassName("card")).map(e => (parseInt(e.id)))[0];
}

function onClick(e) {
    let button = e.target;
    button.setAttribute("disabled", "true");
    if (button.name == "Yes") {
        swipeRigth();
    } else if (button.name == "No") {
        swipeLeft();
    }
    setTimeout(() => {
        button.removeAttribute("disabled");
    }, 400);
}

function moveForward() {
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.style.opacity = Number(e.style.opacity) + 0.2;
        e.style.top = (Number(e.style.top.slice(0, -2)) + 20) + "px";
    });
}

function dropCurrentCard() {
    document.getElementById(getCurrentCard()).remove();
}

function swipeRigth() {
    let currentCard = document.getElementById(getCurrentCard());
    if (currentCard != null) {
        let pos = 0;
        let opacity = 1;
        const threshold = 200;
        let id = null;
        clearInterval(id);
        id = setInterval(frame, 1000 / (threshold));

        function frame() {
            if (pos > threshold) {
                clearInterval(id);
                dropCurrentCard();
            } else {
                pos += (pos + 10) / 18;
                opacity = 1 - ((pos / threshold) * 10);
                currentCard.style.left = pos + "px";
                currentCard.style.opacity = opacity;
            }
        }
    }
}

function swipeLeft() {
    let currentCard = document.getElementById(getCurrentCard());
    if (currentCard != null) {
        let pos = 0;
        let opacity = 1;
        const threshold = 200;
        let id = null;
        clearInterval(id);
        id = setInterval(frame, 1000 / (threshold));

        function frame() {
            if (pos < -threshold) {
                clearInterval(id);
                dropCurrentCard();
            } else {
                pos -= (-pos + 10) / 18;
                opacity = 1 - (((-pos) / threshold) * 10);
                currentCard.style.left = pos + "px";
                currentCard.style.opacity = opacity;
            }
        }
    }
}