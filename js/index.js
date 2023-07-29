
// TODO: make since call to initialse
//make an off screen canvas to hold all the sprites
const backCanvas = createAnyCanvas("back");

//make an on screen canvas to draw things
const frontCanvas = createAnyCanvas("front");

//make a title screen
const titleScreen = new TitleScreen;

// TODO: move into canvas module
const paintSquare = () => {
    frontCanvas.ctx.fillStyle = '#FF0000';
    frontCanvas.ctx.fillRect((config.canvasWidth / 2) - 10, (config.canvasHeight / 2) - 10, 20, 20);
};

// TODO: move into canvas module
const render = () => {
    frontCanvas.ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
    paintBack();
    paintSquare();
}

gameState = null;

// TODO: either get time between calls, or store time of last call and calculate difference
const engineLoop = () => {
    if (gameState) {
        updateGameState();
    } else {
        //TODO: show title screen

    }
    render();
    engineLoop();
    window.requestAnimationFrame(engineLoop);
}

const title_screen = () => {
    //render();
    paintBack();
    titleScreen.paintStars();
    //TODO
    input = false;
    if (input) {
        window.requestAnimationFrame(engineLoop);
    } else {
        window.requestAnimationFrame(title_screen);
    }
}

//this kicks off the animating
window.requestAnimationFrame(title_screen)