import { Star } from "./star.js";

export class TitlePage {
    stars: Star[]

    constructor(canvasWidth: number, canvasHeight: number, numOfStars: number = 20) {
        this.stars = []
        for (let i = 0; i < numOfStars; i++) {
            this.stars.push(new Star(canvasWidth, canvasHeight))
        }
    }

    update = () => {
        this.stars.forEach(star => {
            star.update()
        })
    }
}