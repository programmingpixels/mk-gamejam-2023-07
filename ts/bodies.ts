import { InputState } from "./inputs.js"
import { Polygon } from "./polygon.js"

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
    // polygon: Polygon

    constructor(x: number, y: number, color: number, velocity: Velocity, mass: number) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = velocity
        this.mass = mass
        this.rotation = 0
        // this.polygon = new Polygon()
    }
}

// applyForce(force_x, force_y) {
//     //TODO: implement
//     // this.velocity_x += force_x;
//     // this.velocity_y += force_y;
// }


export interface Obstacle extends Body {

}

export interface Enemy extends Body {
    health: number  // represents the number of sides it has
}

export class Player extends Body {
    health: number

    constructor(health: number = 5) {
        super(0, 0, 50, { x: 0, y: 0 }, 0)
        this.health = 5
    }

    update = (timeDelta: number, inputState: InputState) => {
        // if inputState.up {
        //     this.x
        // }
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
