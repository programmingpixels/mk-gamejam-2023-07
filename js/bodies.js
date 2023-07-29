export class Velocity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class Body {
    constructor(x, y, color, velocity) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
    }
}

export class Obstacle extends Body {

}

export class Enemy extends Body {
    constructor(x, y, color, velocity, health) {
        super(x, y, color, velocity);
        this.health = health;  // represents the number of sides it has
    }
}

export class Player extends Body {
    constructor(x, y, color, velocity, health) {
        super(x, y, color, velocity);
        this.health = health;
    }
}

export class Ballistic {
    constructor(x, y, velocity, polarity) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.polarity = polarity;  // boolean, true for positive, false for negative
    }
}
