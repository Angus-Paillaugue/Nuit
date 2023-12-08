// Make the DIV element draggable:

function getCurrentCard() {
    console.log(Array.from(document.getElementsByClassName("card")).map(e => (parseInt(e.id))));
    return Array.from(document.getElementsByClassName("card")).map(e => (parseInt(e.id)))[0];
}

function onYesClick() {
    console.log("Clicked on Yes" + getCurrentCard());
    swipeRigth();

    moveForward();

}

function onNoClick() {
    console.log("Clicked on No" + getCurrentCard());
    swipeLeft();

    moveForward();

}

function moveForward() {

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        console.log(e);
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