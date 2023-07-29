
const config = {
    canvasWidth: 1000,
    canvasHeight: 800,
    bgColor: "#000000"
};

// TODO : return both required canvases
const initializeCanvas = () => {
    //make an off screen canvas to hold all the sprites
    backCanvas = createAnyCanvas("back");

    //make an on screen canvas to draw things
    frontCanvas = createAnyCanvas("front");

};

const createAnyCanvas = (visible) => {
    if (visible = "front") {
        anyCanvas = document.getElementById("frontCanvas");
    }
    else if (visible = "back") {
        anyCanvas = document.createElement('canvas');
    }
    anyCanvas.width = config.canvasWidth;
    anyCanvas.height = config.canvasHeight;
    anyCanvas.ctx = anyCanvas.getContext("2d");
    return anyCanvas;
};

const paintBack = () => {   // draw the background color
    frontCanvas.ctx.fillStyle = config.bgColor;
    frontCanvas.ctx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
};

// TODO: predraw all the sprites to the back canvas
const initialiseBackCanvas = () => {

}