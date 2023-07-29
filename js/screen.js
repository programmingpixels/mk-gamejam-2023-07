const CONFIG = {
    canvasWidth: 1000,
    canvasHeight: 800,
    bgColor: "#000000"
};
class BrushableHtmlCanvasElement extends HTMLCanvasElement {
    constructor() {
        super();
        this.ctx = this.getContext("2d");
    }
}
export class Screen {
    constructor() {
        this.paintBackgroundColor = () => {
            this.visibleCanvas.ctx.fillStyle = CONFIG.bgColor;
            this.visibleCanvas.ctx.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
        };
        this.paintSquare = () => {
            this.visibleCanvas.ctx.fillStyle = '#FF0000';
            this.visibleCanvas.ctx.fillRect((CONFIG.canvasWidth / 2) - 10, (CONFIG.canvasHeight / 2) - 10, 20, 20);
        };
        this.paintStars = (stars) => {
            stars.forEach(star => {
                this.visibleCanvas.ctx.fillStyle = star.getColorHex();
                this.visibleCanvas.ctx.fillRect(star.x, star.y, 1, 1);
            });
        };
        //make an off screen canvas to hold all the sprites
        this.invisibleCanvas = document.createElement("canvas");
        this.invisibleCanvas.width = CONFIG.canvasWidth;
        this.invisibleCanvas.height = CONFIG.canvasHeight;
        this.invisibleCanvas.ctx = this.invisibleCanvas.getContext("2d");
        //make an on screen canvas to draw things
        this.visibleCanvas = document.getElementById("frontCanvas");
        this.visibleCanvas.width = CONFIG.canvasWidth;
        this.visibleCanvas.height = CONFIG.canvasHeight;
        this.visibleCanvas.ctx = this.visibleCanvas.getContext("2d");
    }
}
