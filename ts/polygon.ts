
export class Polygon {
    sides: number;
    radius: number;
    hitRadius: number;
    showHitRadius: boolean;
    isFilled: boolean;
    fillColor: string;
    isOutlined: boolean;
    outlineColor: string;
    isPlayer: boolean;

    constructor(sides: number, radius: number, fillColor: string, outlineColor: string,
                showHitRadius: boolean=false, isFilled: boolean=true, isOutlined: boolean=false, isPlayer: boolean) {
        this.sides = sides
        this.radius = radius
        this.fillColor = fillColor
        this.outlineColor = outlineColor
        this.showHitRadius = showHitRadius
        this.isFilled = isFilled
        this.isOutlined = isOutlined
        this.isPlayer = isPlayer
        this.hitRadius = this.radius
        if (this.isPlayer) {
            this.sides = 3
        }

    }

}