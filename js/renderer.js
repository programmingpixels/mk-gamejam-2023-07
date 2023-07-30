const CONFIG = {
    canvasWidth: 1000,
    canvasHeight: 1000,
    bgColor: "#000000",
    mainTitle: "- BASTEROIDS 4 - TOUCHING THE GNOME -",
};
class BrushableHtmlCanvasElement extends HTMLCanvasElement {
    constructor() {
        super();
        this.ctx = this.getContext("2d");
    }
}
export class Renderer {
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
        this.paintTitle = (font, color) => {
            this.visibleCanvas.ctx.fillStyle = color;
            this.visibleCanvas.ctx.font = font;
            this.visibleCanvas.ctx.textAlign = 'center';
            this.visibleCanvas.ctx.textBaseline = 'middle';
            this.visibleCanvas.ctx.fillText(CONFIG.mainTitle, (CONFIG.canvasWidth / 2), (CONFIG.canvasHeight / 4));
        };
        this.paintPressSpacebar = (font, color) => {
            this.visibleCanvas.ctx.fillStyle = color;
            this.visibleCanvas.ctx.font = font;
            this.visibleCanvas.ctx.textAlign = 'center';
            this.visibleCanvas.ctx.textBaseline = 'middle';
            this.visibleCanvas.ctx.fillText("Press SPACEBAR to Start", (CONFIG.canvasWidth / 2), (CONFIG.canvasHeight * 0.75));
        };
        this.paintPolygon = (poly, x, y) => {
            this.visibleCanvas.ctx.beginPath();
            this.visibleCanvas.ctx.moveTo(x + poly.radius * Math.cos(0), y + poly.radius * Math.sin(0));
            for (var i = 1; i <= poly.sides; i += 1) {
                this.visibleCanvas.ctx.lineTo(x + poly.radius * Math.cos(i * 2 * Math.PI / poly.sides), y + poly.radius * Math.sin(i * 2 * Math.PI / poly.sides));
            }
            if (poly.isFilled) {
                this.visibleCanvas.ctx.fillStyle = poly.fillColor;
                this.visibleCanvas.ctx.fill();
            }
            if (poly.isOutlined) {
                this.visibleCanvas.ctx.strokeStyle = poly.outlineColor;
                this.visibleCanvas.ctx.lineWidth = 1;
                this.visibleCanvas.ctx.stroke();
            }
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
