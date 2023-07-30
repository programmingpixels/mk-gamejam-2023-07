export function toDegrees(angle: number) {
    return angle * (180 / Math.PI);
}

export function toRadians(angle: number) {
    return (angle / 360) * 2 * Math.PI
}

export function randomIntegerInclusive(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}