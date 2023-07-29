const COLORS = [ "#4B0082", "#250041", "#120020" ]

export class Polygon {
    x: number;
    y: number;
    sides: number;
    size: number;
    color: number;

    constructor(x: number, y: number, sides: number, size: number) {
        this.x = x
        this.y = y
        this.sides = sides
        this.size = size
        this.color = Math.floor(Math.random() * COLORS.length)
    }

    getColorHex = (): string => {
        return COLORS[this.color]
    }
}