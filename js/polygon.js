const COLORS = ["#4B0082", "#250041", "#120020"];
export class Polygon {
    constructor(x, y, sides, size) {
        this.getColorHex = () => {
            return COLORS[this.color];
        };
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.size = size;
        this.color = Math.floor(Math.random() * COLORS.length);
    }
}
