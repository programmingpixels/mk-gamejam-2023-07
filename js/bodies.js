import { Polygon } from "./polygon.js";
import { rgbToHex, toRadians } from "./utils.js";
import { randomIntegerInclusive } from "./utils.js";
export class Body {
    constructor(x, y, color, velocity, mass, polygon) {
        this.getHexColor = () => {
            let r = 255 * (this.color / 100);
            let g = 0;
            let b = 255 * (1 - (this.color / 100));
            return rgbToHex(r, g, b);
        };
        this.applyForce = (direction_d, magnitude, timeDelta) => {
            const f_x = magnitude * Math.sin(toRadians(direction_d));
            const f_y = magnitude * Math.cos(toRadians(direction_d));
            this.velocity.x += timeDelta * f_x / this.mass;
            this.velocity.y += -timeDelta * f_y / this.mass;
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.mass = mass;
        this.rotation = 0;
        this.polygon = polygon;
    }
}
export class Obstacle extends Body {
    constructor() {
        const polygon = new Polygon(0, 50, "#0000FF", "#000000", true, true, true, false);
        super(100, 100, 50, { x: 0, y: 0 }, 0, polygon);
    }
}
export class Enemy extends Body {
    constructor() {
        let health = randomIntegerInclusive(3, 8);
        const polygon = new Polygon(health, 20, "#00FF00", "#000000", true, true, true, false);
        super(200, 200, 50, { x: 0, y: 0 }, 0, polygon);
        this.health = health;
    }
}
export class Player extends Body {
    constructor(health = 5) {
        const polygon = new Polygon(3, 10, "#FF0000", "#000000", true, true, true, true);
        super(50, 50, 50, { x: 0, y: 0 }, 100, polygon);
        this.update = (timeDelta, inputState) => {
            // rotate
            if (inputState.left) {
                this.rotation -= 2;
            }
            if (inputState.right) {
                this.rotation += 2;
            }
            if (inputState.up) {
                this.applyForce(this.rotation, 0.005, timeDelta);
            }
            if (inputState.down) {
                this.applyForce(this.rotation, -0.005, timeDelta);
            }
            // update position
            this.x += this.velocity.x * timeDelta;
            this.y += this.velocity.y * timeDelta;
        };
        this.health = health;
    }
}
export var RedBlue;
(function (RedBlue) {
    RedBlue[RedBlue["Red"] = 0] = "Red";
    RedBlue[RedBlue["Blue"] = 1] = "Blue";
})(RedBlue || (RedBlue = {}));
