import { InputState } from "./inputs.js"
import { Polygon } from "./polygon.js"
import { rgbToHex, toDegrees, toRadians } from "./utils.js"
import { randomIntegerInclusive } from "./utils.js"
import { CONFIG } from "./CONFIG.js"

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
    polygon: Polygon | null

    getHexColor = () => {
        let r = Math.floor(255 * (this.color / 100))
        let g = 0
        let b = Math.floor(255 * (1 - (this.color / 100)))
        return rgbToHex(r, g, b)
    }

    constructor(x: number, y: number, color: number, velocity: Velocity, mass: number) {
        this.x = x
        this.y = y
        this.color = color
        this.velocity = velocity
        this.mass = mass
        this.rotation = 0
        this.polygon = null
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
        let x_sign = (Math.random() < 0.5) ? -1 : 1;
        let y_sign = (Math.random() < 0.5) ? -1 : 1;
        let vel = (Math.random() * 0.1) + 0.01
        super((Math.random() * CONFIG.canvasWidth) + (x_sign * CONFIG.canvasWidth), (Math.random() * (CONFIG.canvasHeight) + (y_sign * CONFIG.canvasHeight)), randomIntegerInclusive(1, 100), { x: x_sign * vel * -1, y: y_sign * vel * -1 }, 0)
        const polygon = new Polygon(0, 25, this.getHexColor(), this.getHexColor(), true, true, true, false)
        this.polygon = polygon
    }

    update = (timeDelta: number) => {
        // update position
        this.x += this.velocity.x * timeDelta
        this.y += this.velocity.y * timeDelta
    }
}

export class Enemy extends Body {
    health: number  // represents the number of sides it has

    constructor() {
        let health = randomIntegerInclusive(3, 8)
        super(Math.random() * CONFIG.canvasWidth, Math.random() * (CONFIG.canvasHeight - 100), randomIntegerInclusive(1, 100), { x: 0, y: 0 }, 0)
        const polygon = new Polygon(health, 20, this.getHexColor(), this.getHexColor(), true, true, true, false)

        this.health = health
        this.polygon = polygon
    }
}

export class Player extends Body {
    health: number

    constructor(startColor: number, startX: number, startY: number, health: number = 1) {
        super(startX, startY, startColor, { x: 0, y: 0 }, 100)
        this.health = health
        const polygon = new Polygon(3, 10, this.getHexColor(), this.getHexColor(), true, true, true, true)
        this.polygon = polygon
    }

    update = (timeDelta: number, inputState: InputState) => {
        // rotate
        if (inputState.left) {
            this.rotation -= 3
        }
        if (inputState.right) {
            this.rotation += 3
        }
        if (inputState.up) {
            this.applyForce(this.rotation, 0.02, timeDelta)
        }
        if (inputState.down) {
            this.applyForce(this.rotation, -0.02, timeDelta)
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
