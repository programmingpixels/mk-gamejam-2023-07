import { Star } from "./star.js";
export class TitlePage {
    constructor(canvasWidth, canvasHeight, numOfStars = 20) {
        this.update = () => {
            this.stars.forEach(star => {
                star.update();
            });
        };
        this.stars = [];
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new Star(canvasWidth, canvasHeight));
        }
    }
}
