import { Polygon } from "./polygon.js";
import { rgbToHex, toRadians } from "./utils.js";
import { randomIntegerInclusive } from "./utils.js";
import { CONFIG } from "./CONFIG.js";
export class Body {
    constructor(x, y, color, velocity, mass) {
        this.getHexColor = () => {
            let r = Math.floor(255 * (this.color / 100));
            let g = 0;
            let b = Math.floor(255 * (1 - (this.color / 100)));
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
        this.polygon = null;
    }
}
export class Obstacle extends Body {
    constructor() {
        super(Math.random() * CONFIG.canvasWidth, Math.random() * (CONFIG.canvasHeight - 100), randomIntegerInclusive(1, 100), { x: 0, y: 0 }, 0);
        const polygon = new Polygon(0, 25, this.getHexColor(), this.getHexColor(), true, true, true, false);
        this.polygon = polygon;
    }
}
export class Enemy extends Body {
    constructor() {
        let health = randomIntegerInclusive(3, 8);
        super(Math.random() * CONFIG.canvasWidth, Math.random() * (CONFIG.canvasHeight - 100), randomIntegerInclusive(1, 100), { x: 0, y: 0 }, 0);
        const polygon = new Polygon(health, 20, this.getHexColor(), this.getHexColor(), true, true, true, false);
        this.health = health;
        this.polygon = polygon;
    }
}
export class Player extends Body {
    constructor(health = 5) {
        super((CONFIG.canvasWidth / 2), (CONFIG.canvasHeight / 2), 50, { x: 0, y: 0 }, 100);
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
        const polygon = new Polygon(3, 10, this.getHexColor(), this.getHexColor(), true, true, true, true);
        this.polygon = polygon;
    }
}
export var RedBlue;
(function (RedBlue) {
    RedBlue[RedBlue["Red"] = 0] = "Red";
    RedBlue[RedBlue["Blue"] = 1] = "Blue";
})(RedBlue || (RedBlue = {}));
