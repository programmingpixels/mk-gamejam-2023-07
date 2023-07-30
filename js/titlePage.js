import { Star } from "./star.js";
import { Polygon } from "./polygon.js";
export class TitlePage {
    constructor(canvasWidth, canvasHeight, numOfStars = 100) {
        this.update = (inputStates) => {
            //TODO: implement options for however many players
            if (inputStates[0].fireRed || inputStates[0].fireBlue) {
                return false;
            }
            this.stars.forEach(star => {
                star.update();
            });
            return true;
        };
        this.stars = [];
        this.polygon = new Polygon(5, 50, "#000022", "#888888", false, true, true, false);
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new Star(canvasWidth, canvasHeight));
        }
    }
}
