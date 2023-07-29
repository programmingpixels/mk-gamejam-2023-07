export class Velocity {
    x: number
    y: number
}

export class Body {
    x: number  // center
    y: number  // center
    color: number  // 0-100
    velocity: Velocity
}

export class Obstacle extends Body {

}

export class Enemy extends Body {
    health: number  // represents the number of sides it has
}

export class Player extends Body {
    health: number
}

export enum RedBlue {
    Red,
    Blue,
}

export class Ballistic {
    x: number
    y: number
    velocity: Velocity
    polarity: RedBlue
}
