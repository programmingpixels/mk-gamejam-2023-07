import { InputState } from "./inputs.js"
import { Polygon } from "./polygon.js"
import { toDegrees } from "./utils.js"

export interface Velocity {
    x: number
    y: number
}

export class Body {
    x: number
    y: number
    color: number  // 0-100
    velocity: Velocity
    mass: number
    rotation: number
    polygon: Polygon

    constructor(x: number, y: number, color: number, velocity: Velocity, mass: number, polygon: Polygon) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = velocity
        this.mass = mass
        this.rotation = 0
        this.polygon = polygon
    }

    applyForce = (direction: number, magnitude: number, timeDelta: number) => {
        const f_x = magnitude * Math.sin(toDegrees(direction))
        const f_y = magnitude * Math.cos(toDegrees(direction))

        this.velocity.x += timeDelta * f_x / this.mass
        this.velocity.y += timeDelta * f_y / this.mass
    }
}



export interface Obstacle extends Body {

}

export interface Enemy extends Body {
    health: number  // represents the number of sides it has
}

export class Player extends Body {
    health: number

    constructor(health: number = 5) {
        const polygon = new Polygon(3, 10, "#FF0000", "#000000", true, true, true, true)

        super(0, 0, 50, { x: 0, y: 0 }, 0, polygon)
        this.health = 5
    }

    update = (timeDelta: number, inputState: InputState) => {
        // rotate
        if (inputState.left) {
            this.rotation -= 1
        }
        if (inputState.right) {
            this.rotation += 1
        }
        if (inputState.up) {
            this.applyForce(this.rotation, 5, timeDelta)
        }
        if (inputState.down) {
            this.applyForce(this.rotation, -5, timeDelta)
        }

        // update position
        this.x = this.x + this.velocity.x * timeDelta
        this.y = this.y + this.velocity.y * timeDelta
    }
}

export enum RedBlue {
    Red,
    Blue,
}

export interface Ballistic {
    x: number
    y: number
    velocity: Velocity
    polarity: RedBlue
}
