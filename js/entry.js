import { ApplicationState } from "./applicationState.js";
import { getInputStates, keyDownHandler, keyUpHandler } from "./inputs.js";
const appState = new ApplicationState();
export const main = () => {
    const inputStates = getInputStates();
    appState.update(inputStates);
    appState.paint();
    window.requestAnimationFrame(main);
};
// handles keyboard input
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);
//when controller connected, page will show: "Gamepad connected"
window.addEventListener("gamepadconnected", function (e) {
    console.log("Gamepad %s connected at %d", e.gamepad.id, e.gamepad.index);
});
//when controller disconnected, page will show: "Gamepad disconnected"
window.addEventListener("gamepaddisconnected", function (e) {
    console.log("Gamepad %s disconnected", e.gamepad.id);
});
//this kicks off the animating
window.requestAnimationFrame(main);
