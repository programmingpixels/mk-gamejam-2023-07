import { toRadians } from "./utils.js";
import { CONFIG } from "./CONFIG.js";
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
        this.paintScore = (score) => {
            this.visibleCanvas.ctx.fillStyle = "#11FF11";
            this.visibleCanvas.ctx.font = "bold 36px Courier";
            this.visibleCanvas.ctx.textAlign = 'left';
            this.visibleCanvas.ctx.textBaseline = 'middle';
            this.visibleCanvas.ctx.fillText(score.toString(), 20, 20);
        };
        this.paintPressStartGame = (font, color) => {
            this.visibleCanvas.ctx.fillStyle = color;
            this.visibleCanvas.ctx.font = font;
            this.visibleCanvas.ctx.textAlign = 'center';
            this.visibleCanvas.ctx.textBaseline = 'middle';
            this.visibleCanvas.ctx.fillText("Press FIRE to Start", (CONFIG.canvasWidth / 2), (CONFIG.canvasHeight * 0.75));
        };
        this.paintPolygon = (poly, x, y, rotation_d) => {
            if (poly.sides == 0) {
                this.visibleCanvas.ctx.beginPath();
                this.visibleCanvas.ctx.arc(x, y, poly.radius, 0, 2 * Math.PI, false);
                if (poly.isFilled) {
                    this.visibleCanvas.ctx.fillStyle = poly.fillColor;
                    this.visibleCanvas.ctx.fill();
                }
                if (poly.isOutlined) {
                    this.visibleCanvas.ctx.lineWidth = 1;
                    this.visibleCanvas.ctx.strokeStyle = poly.outlineColor;
                    this.visibleCanvas.ctx.stroke();
                }
            }
            else {
                let rotation_r = toRadians(rotation_d) - toRadians(90);
                this.visibleCanvas.ctx.beginPath();
                this.visibleCanvas.ctx.moveTo(x + poly.radius * Math.cos(rotation_r), y + poly.radius * Math.sin(rotation_r));
                for (var i = 1; i <= poly.sides; i += 1) {
                    this.visibleCanvas.ctx.lineTo(x + poly.radius * Math.cos(rotation_r + (i * 2 * Math.PI / poly.sides)), y + poly.radius * Math.sin(rotation_r + (i * 2 * Math.PI / poly.sides)));
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
