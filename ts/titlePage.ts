import { Star } from "./star.js";

export class TitlePage {
    stars: Star[]

    constructor(canvasWidth: number, canvasHeight: number, numOfStars: number = 100) {
        this.stars = []
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