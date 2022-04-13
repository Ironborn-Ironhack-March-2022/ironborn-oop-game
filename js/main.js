

function createDomElement(className){
    const board = document.getElementById("board");
    const newElm = document.createElement("div");
    newElm.className = className;

    board.appendChild(newElm);

    return newElm;
}


function drawDomElement(instance){    
    instance.domElement.style.width = instance.width + "vw";
    instance.domElement.style.height = instance.height + "vh";

    instance.domElement.style.left = instance.positionX + "vw";
    instance.domElement.style.bottom = instance.positionY + "vh";
}


function removeDomElement(elm){
    elm.remove();
}


/* Start game */
const game = new Game(createDomElement, drawDomElement, removeDomElement);
game.start();


/* Event listeners */
document.addEventListener("keydown", function(event){
    switch(event.key){
        case "ArrowRight":
            game.movePlayer("right");
            break;
        case "ArrowLeft":
            game.movePlayer("left");
            break;
    }
});

