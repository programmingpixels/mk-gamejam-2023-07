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
        let x_sign = (Math.random() < 0.5) ? -1 : 1;
        let y_sign = (Math.random() < 0.5) ? -1 : 1;
        let vel = (Math.random() * 0.1) + 0.01;
        super((Math.random() * CONFIG.canvasWidth) + (x_sign * CONFIG.canvasWidth), (Math.random() * (CONFIG.canvasHeight) + (y_sign * CONFIG.canvasHeight)), randomIntegerInclusive(1, 100), { x: x_sign * vel * -1, y: y_sign * vel * -1 }, 0);
        this.update = (timeDelta) => {
            // update position
            this.x += this.velocity.x * timeDelta;
            this.y += this.velocity.y * timeDelta;
        };
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
    constructor(startColor, startX, startY, health = 1) {
        super(startX, startY, startColor, { x: 0, y: 0 }, 100);
        this.update = (timeDelta, inputState) => {
            // rotate
            if (inputState.left) {
                this.rotation -= 3;
            }
            if (inputState.right) {
                this.rotation += 3;
            }
            if (inputState.up) {
                this.applyForce(this.rotation, 0.03, timeDelta);
            }
            if (inputState.down) {
                this.applyForce(this.rotation, -0.03, timeDelta);
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
