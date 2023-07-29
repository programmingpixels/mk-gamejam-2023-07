
//make an off screen canvas to hold all the sprites
const backCanvas = createAnyCanvas("back");

//make an on screen canvas to draw things
const frontCanvas = createAnyCanvas("front");


const paintSquare = () => {
    frontCanvas.ctx.fillStyle = '#FF0000';
    frontCanvas.ctx.fillRect((config.canvasWidth/2)-10, (config.canvasHeight/2)-10, 20, 20);
};

const render = () => {
    frontCanvas.ctx.clearRect(0, 0, config.canvasWidth, config.canvasHeight);
    paintBack();
    paintSquare();
}

const animate = () => {
    render();
    window.requestAnimationFrame(animate);
}

//this kicks off the animating
window.requestAnimationFrame(animate)