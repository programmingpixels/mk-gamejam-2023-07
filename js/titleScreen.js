"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitlePage = void 0;
const star_1 = require("./star");
class TitlePage {
    constructor(canvasWidth, canvasHeight, numOfStars = 20) {
        this.update = () => {
            this.stars.forEach(star => {
                star.update();
            });
        };
        this.stars = [];
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new star_1.Star(canvasWidth, canvasHeight));
        }
    }
}
exports.TitlePage = TitlePage;
