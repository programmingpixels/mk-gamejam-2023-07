"use strict";
// TODO: make since call to initialse
Object.defineProperty(exports, "__esModule", { value: true });
const states_1 = require("./states");
const appState = new states_1.ApplicationState();
const main = () => {
    appState.update();
    appState.paint();
    window.requestAnimationFrame(main);
};
//this kicks off the animating
window.requestAnimationFrame(main);
