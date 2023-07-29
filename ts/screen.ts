import { Star } from "./star.js";

const CONFIG = {
    canvasWidth: 1000,
    canvasHeight: 800,
    bgColor: "#000000"
};


class BrushableHtmlCanvasElement extends HTMLCanvasElement {
    ctx: CanvasRenderingContext2D
    constructor() {
        super()
        this.ctx = this.getContext("2d")
    }
}


export class Screen {
    invisibleCanvas: BrushableHtmlCanvasElement
    visibleCanvas: BrushableHtmlCanvasElement

    constructor() {
        //make an off screen canvas to hold all the sprites
        this.invisibleCanvas = document.createElement("canvas")
        this.invisibleCanvas.width = CONFIG.canvasWidth
        this.invisibleCanvas.height = CONFIG.canvasHeight
        this.invisibleCanvas.ctx = this.invisibleCanvas.getContext("2d")

        //make an on screen canvas to draw things
        this.visibleCanvas = document.getElementById("frontCanvas")
        this.visibleCanvas.width = CONFIG.canvasWidth
        this.visibleCanvas.height = CONFIG.canvasHeight
        this.visibleCanvas.ctx = this.visibleCanvas.getContext("2d")
    }

    paintBackgroundColor = () => {
        this.visibleCanvas.ctx.fillStyle = CONFIG.bgColor;
        this.visibleCanvas.ctx.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
    };

    paintSquare = () => {
        this.visibleCanvas.ctx.fillStyle = '#FF0000';
        this.visibleCanvas.ctx.fillRect((CONFIG.canvasWidth / 2) - 10, (CONFIG.canvasHeight / 2) - 10, 20, 20);
    };

    paintStars = (stars: Star[]) => {
        stars.forEach(star => {
            this.visibleCanvas.ctx.fillStyle = star.getColorHex()
            this.visibleCanvas.ctx.fillRect(star.x, star.y, 1, 1)
        })
    }
}