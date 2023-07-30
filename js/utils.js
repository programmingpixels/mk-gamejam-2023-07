export function toDegrees(angle) {
    return angle * (180 / Math.PI);
}
export function toRadians(angle) {
    return (angle / 360) * 2 * Math.PI;
}
export function randomIntegerInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
