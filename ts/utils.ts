export function toDegrees(angle: number) {
    return angle * (180 / Math.PI);
}

export function toRadians(angle: number) {
    return (angle / 360) * 2 * Math.PI
}

export function randomIntegerInclusive(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
    let hexColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return hexColor
}