import { GameState } from "./gameState.js"
import { TitlePage } from "./titlePage.js"
import { Renderer } from "./renderer.js"
import { InputState } from "./inputs.js"

export class ApplicationState {
    titlePage: TitlePage | undefined
    gameState: GameState | undefined
    renderer: Renderer

    constructor() {
        this.renderer = new Renderer()
        this.titlePage = new TitlePage(this.renderer.visibleCanvas.width, this.renderer.visibleCanvas.height)
    }

    update = (inputStates: InputState[]) => {
        if (this.titlePage) {
            this.titlePage.update(inputStates)
        }
        else if (this.gameState) {
            this.gameState.update(inputStates)
        }
    }

    startGame = () => {
        this.titlePage = undefined
        this.gameState = new GameState()
    }

    paint = () => {
        this.renderer.paintBackgroundColor()

        if (this.titlePage) {
            this.paintTitlePage()
        }
        else if (this.gameState) {
            this.paintGameState()
        }
    }

    getInputs = (): string[] => {
        //TODO: implement
        return []  // should return a list of uuid buttons/ inputs that are pressed
    }

    paintTitlePage = () => {
        if (this.titlePage?.stars) {
            this.renderer.paintStars(this.titlePage.stars)
        }
    }
    paintGameState = () => {
        throw new Error("Method not implemented.");
    }

}