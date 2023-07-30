import { Star } from "./star.js";
import { Polygon } from "./polygon.js";

export class TitlePage {
    stars: Star[]
    polygon: Polygon

    constructor(canvasWidth: number, canvasHeight: number, numOfStars: number = 100) {
        this.stars = []
        this.polygon = new Polygon(5, 50, "#000022", "#888888", false, true, true, false)
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new Star(canvasWidth, canvasHeight))
        }
    }

    update = (inputs: string[]): boolean => {
        //TODO: implement options for however many players
        if (inputs.includes("keyboard_space")) {
            return false
        }
        this.stars.forEach(star => {
            star.update()
        })
        return true
    }
}