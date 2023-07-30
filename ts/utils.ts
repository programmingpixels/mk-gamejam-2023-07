export function toDegrees(angle: number) {
    return angle * (180 / Math.PI);
}

export function toRadians(angle: number) {
    return (angle/360) * 2 * Math.PI
}