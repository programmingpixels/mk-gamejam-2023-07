
// TODO: make since call to initialse

import { ApplicationState } from "./states";

const appState = new ApplicationState()

const main = () => {
    appState.update()
    appState.paint()
    window.requestAnimationFrame(main)
}

//this kicks off the animating
window.requestAnimationFrame(main)