export class Body {
    // polygon: Polygon
    constructor(x, y, color, velocity, mass) {
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
            // if inputState.up {
            //     this.x
            // }
        };
        this.health = 5;
    }
}
export var RedBlue;
(function (RedBlue) {
    RedBlue[RedBlue["Red"] = 0] = "Red";
    RedBlue[RedBlue["Blue"] = 1] = "Blue";
})(RedBlue || (RedBlue = {}));
