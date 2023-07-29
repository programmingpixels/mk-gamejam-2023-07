
const config = {
    canvasWidth: 1000,
    canvasHeight: 800,
    bgColor: "#000000"
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