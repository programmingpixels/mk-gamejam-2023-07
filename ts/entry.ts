
import { ApplicationState } from "./states.js";

const appState = new ApplicationState()

export const main = () => {
    appState.update()
    appState.paint()
    window.requestAnimationFrame(main)
}

//this kicks off the animating
window.requestAnimationFrame(main)
