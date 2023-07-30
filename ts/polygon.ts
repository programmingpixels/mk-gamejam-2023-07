
export class Polygon {
    x: number;
    y: number;
    sides: number;
    radius: number;
    hitRadius: number;
    showHitRadius: boolean;
    isFilled: boolean;
    fillColor: string;
    isOutlined: boolean;
    outlineColor: string;
    rotation: number;
    isPlayer: boolean;

    constructor(x: number, y: number, sides: number, radius: number, fillColor: string, outlineColor: string, rotation: number,
                showHitRadius: boolean=false, isFilled: boolean=true, isOutlined: boolean=false, isPlayer: boolean) {
        this.x = x
        this.y = y
        this.sides = sides
        this.radius = radius
        this.fillColor = fillColor
        this.outlineColor = outlineColor
        this.rotation = rotation
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