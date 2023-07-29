
class Body {
    constructor(x, y, color, mass) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity_x = velocity_x;
        this.velocity_y = velocity_y;
        this.mass = mass;
    }

    applyForce(force_x, force_y) {
        //TODO: implement
        // this.velocity_x += force_x;
        // this.velocity_y += force_y;
    }
}

class Obstacle extends Body {

}

class Enemy extends Body {
    constructor(x, y, color, velocity, health) {
        super(x, y, color, velocity);
        this.health = health;  // represents the number of sides it has
    }
}

class Player extends Body {
    constructor(x, y, color, velocity, health, controller_uuid,) {
        super(x, y, color, velocity);
        this.health = health;
        this.controller_uuid = controller_uuid;
    }
}

class Ballistic {
    constructor(x, y, velocity_x, velocity_y, polarity) {
        this.x = x;
        this.y = y;
        this.velocity_x = velocity_x;
        this.velocity_y = velocity_y;
        this.polarity = polarity;  // boolean, true for positive, false for negative
    }
}
