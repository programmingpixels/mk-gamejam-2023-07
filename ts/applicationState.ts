import { GameState } from "./gameState.js"
import { TitlePage } from "./titlePage.js"

export class ApplicationState {
    titlePage: TitlePage | undefined
    gameState: GameState | undefined
    screen: Screen

    constructor() {
        this.screen = new Screen()
        this.titlePage = new TitlePage(this.screen.visibleCanvas.width, this.screen.visibleCanvas.height)
    }

    update = () => {
        const inputs = this.getInputs()

        if (this.titlePage) {
            this.titlePage.update(inputs)
        }
        else if (this.gameState) {
            this.gameState.update(inputs)
        }
    }

    startGame = () => {
        this.titlePage = undefined
        this.gameState = new GameState()
    }

    paint = () => {
        this.screen.paintBackgroundColor()

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
            this.screen.paintStars(this.titlePage.stars)
        }
    }
    paintGameState = () => {
        throw new Error("Method not implemented.");
    }

}