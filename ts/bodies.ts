import { InputState } from "./inputs.js"
import { Polygon } from "./polygon.js"
import { rgbToHex, toDegrees, toRadians } from "./utils.js"
import { randomIntegerInclusive } from "./utils.js"

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

    getHexColor = () => {
        let r = 255 * (this.color / 100)
        let g = 0
        let b = 255 * (1 - (this.color / 100))
        return rgbToHex(r, g, b)
    }

    constructor(x: number, y: number, color: number, velocity: Velocity, mass: number, polygon: Polygon) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = velocity
        this.mass = mass
        this.rotation = 0
        this.polygon = polygon
    }

    applyForce = (direction_d: number, magnitude: number, timeDelta: number) => {
        const f_x = magnitude * Math.sin(toRadians(direction_d))
        const f_y = magnitude * Math.cos(toRadians(direction_d))

        this.velocity.x += timeDelta * f_x / this.mass
        this.velocity.y += - timeDelta * f_y / this.mass
    }
}



export class Obstacle extends Body {
    constructor() {
        const polygon = new Polygon(0, 50, "#0000FF", "#000000", true, true, true, false)

        super(100, 100, 50, { x: 0, y: 0 }, 0, polygon)
    }
}

export class Enemy extends Body {
    health: number  // represents the number of sides it has

    constructor() {
        let health = randomIntegerInclusive(3, 8)
        const polygon = new Polygon(health, 20, "#00FF00", "#000000", true, true, true, false)
        super(200, 200, 50, { x: 0, y: 0 }, 0, polygon)

        this.health = health
    }
}

export class Player extends Body {
    health: number

    constructor(health: number = 5) {
        const polygon = new Polygon(3, 10, "#FF0000", "#000000", true, true, true, true)

        super(50, 50, 50, { x: 0, y: 0 }, 100, polygon)
        this.health = health
    }

    update = (timeDelta: number, inputState: InputState) => {
        // rotate
        if (inputState.left) {
            this.rotation -= 2
        }
        if (inputState.right) {
            this.rotation += 2
        }
        if (inputState.up) {
            this.applyForce(this.rotation, 0.005, timeDelta)
        }
        if (inputState.down) {
            this.applyForce(this.rotation, -0.005, timeDelta)
        }

        // update position
        this.x += this.velocity.x * timeDelta
        this.y += this.velocity.y * timeDelta
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
