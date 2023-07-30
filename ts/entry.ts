
import { ApplicationState } from "./applicationState.js";

const appState = new ApplicationState()

export const main = () => {
    console.log("started")
    appState.update()
    appState.paint()
    window.requestAnimationFrame(main)
}

//this kicks off the animating
window.requestAnimationFrame(main)
