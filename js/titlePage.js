import { Star } from "./star.js";
import { Polygon } from "./polygon.js";
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
        this.polygon = new Polygon(500, 500, 8, 50, "#FFFFFF", "#0000FF", 0, false, true, true, false);
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new Star(canvasWidth, canvasHeight));
        }
    }
}
