import { Star } from "./star.js";
export class TitlePage {
    constructor(canvasWidth, canvasHeight, numOfStars = 100) {
        this.update = (inputs) => {
            //TODO: implement options for however many players
            if (inputs.includes("keyboard_space")) {
                return false;
            }
            this.stars.forEach(star => {
                star.update();
            });
            return true;
        };
        this.stars = [];
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new Star(canvasWidth, canvasHeight));
        }
    }
}
