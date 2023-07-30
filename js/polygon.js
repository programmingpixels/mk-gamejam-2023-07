export class Polygon {
    constructor(x, y, sides, radius, fillColor, outlineColor, rotation, showHitRadius = false, isFilled = true, isOutlined = false, isPlayer) {
        this.x = x;
        this.y = y;
        this.sides = sides;
        this.radius = radius;
        this.fillColor = fillColor;
        this.outlineColor = outlineColor;
        this.rotation = rotation;
        this.showHitRadius = showHitRadius;
        this.isFilled = isFilled;
        this.isOutlined = isOutlined;
        this.isPlayer = isPlayer;
        this.hitRadius = this.radius;
    }
}
