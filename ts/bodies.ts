export interface Velocity {
    x: number
    y: number
}

export interface Body {
    x: number
    y: number
    color: number  // 0-100
    velocity: Velocity
    mass: number
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

export interface Player extends Body {
    health: number
    controller_uuid: string

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
