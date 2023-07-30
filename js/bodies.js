export class Body {
    constructor(x, y, color, velocity, mass) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;
        this.mass = mass;
    }
}
export class Player extends Body {
    constructor(health) {
        super(0, 0, 50, { x: 0, y: 0 }, 0);
        this.update = (timeDelta, inputState) => {
            //TODO: implement
        };
        this.health = 5;
    }
}
export var RedBlue;
(function (RedBlue) {
    RedBlue[RedBlue["Red"] = 0] = "Red";
    RedBlue[RedBlue["Blue"] = 1] = "Blue";
})(RedBlue || (RedBlue = {}));
