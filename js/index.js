const frontCanvas = document.getElementById("frontCanvas");
const fCtx = frontCanvas.getContext("2d"); // fCtx is the context for front canvas

const config = {
    canvasWidth: 1000,
    canvasHeight: 800,
};

frontCanvas.width = config.canvasWidth;
frontCanvas.height = config.canvasHeight;



const paintBack = () => {   // draw the background color
    fCtx.fillStyle = '#000000';
    fCtx.fillRect(0, 0, config.canvasWidth, config.canvasHeight);
};

const paintSquare = () => {
    fCtx.fillStyle = '#FF0000';
    fCtx.fillRect((config.canvasWidth/2)-10, (config.canvasHeight/2)-10, 20, 20);
};

const render = () => {
    fCtx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
    paintBack();
    paintSquare();
}

const animate = () => {
    render();
    window.requestAnimationFrame(animate);
}

//this kicks off the animating
window.requestAnimationFrame(animate)