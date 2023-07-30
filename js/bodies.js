import { toDegrees } from "./utils.js";
export class Body {
    // polygon: Polygon
    constructor(x, y, color, velocity, mass) {
        this.applyForce = (direction, magnitude, timeDelta) => {
            const f_x = magnitude * Math.sin(toDegrees(direction));
            const f_y = magnitude * Math.cos(toDegrees(direction));
            this.velocity.x += timeDelta * f_x / this.mass;
            this.velocity.y += timeDelta * f_y / this.mass;
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.mass = mass;
        this.rotation = 0;
        // this.polygon = new Polygon()
    }
}
export class Player extends Body {
    constructor(health = 5) {
        super(0, 0, 50, { x: 0, y: 0 }, 0);
        this.update = (timeDelta, inputState) => {
            // rotate
            if (inputState.left) {
                this.rotation -= 1;
            }
            if (inputState.right) {
                this.rotation += 1;
            }
            if (inputState.up) {
                this.applyForce(this.rotation, 5, timeDelta);
            }
            if (inputState.down) {
                this.applyForce(this.rotation, -5, timeDelta);
            }
            // update position
            this.x = this.x + this.velocity.x * timeDelta;
            this.y = this.y + this.velocity.y * timeDelta;
        };
        this.health = 5;
    }
}
export var RedBlue;
(function (RedBlue) {
    RedBlue[RedBlue["Red"] = 0] = "Red";
    RedBlue[RedBlue["Blue"] = 1] = "Blue";
})(RedBlue || (RedBlue = {}));
