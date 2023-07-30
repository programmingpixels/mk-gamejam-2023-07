export class Polygon {
    constructor(sides, radius, fillColor, outlineColor, showHitRadius = false, isFilled = true, isOutlined = false, isPlayer) {
        this.sides = sides;
        this.radius = radius;
        this.fillColor = fillColor;
        this.outlineColor = outlineColor;
        this.showHitRadius = showHitRadius;
        this.isFilled = isFilled;
        this.isOutlined = isOutlined;
        this.isPlayer = isPlayer;
        this.hitRadius = this.radius;
        if (this.isPlayer) {
            this.sides = 3;
        }
    }
}
