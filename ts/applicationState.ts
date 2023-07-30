import { GameState } from "./gameState.js"
import { TitlePage } from "./titlePage.js"
import { Renderer } from "./renderer.js"
import { InputState } from "./inputs.js"

export class ApplicationState {
    titlePage: TitlePage | undefined
    gameState: GameState | undefined
    renderer: Renderer
    freeze: boolean = false

    constructor() {
        this.renderer = new Renderer()
        this.titlePage = new TitlePage(this.renderer.visibleCanvas.width, this.renderer.visibleCanvas.height)
    }

    update = (inputStates: InputState[]) => {
        if (this.freeze) {
            return
        }

        if (this.titlePage) {
            if (!this.titlePage.update(inputStates)) {
                this.startGame()
            }
        }
        else if (this.gameState) {
            if (!this.gameState.update(inputStates)) {
                this.freeze = true
            }
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
        this.renderer.paintTitle("bold 36px Courier", "#11FF11")
        this.renderer.paintPressStartGame("bold 28px Courier", this.titlePage.stars[0].getColorHex())
        this.renderer.paintPolygon(this.titlePage.polygon, 500, 300, 11)
    }
    paintGameState = () => {
        // paint players
        this.gameState?.players.forEach(player => {
            this.renderer.paintPolygon(
                player.polygon,
                player.x,
                player.y,
                player.rotation,
            )
        })

        // // paint enemies
        // this.gameState?.enemies.forEach(enemy => {
        //     this.renderer.paintPolygon(
        //         enemy.polygon,
        //         enemy.x,
        //         enemy.y,
        //         enemy.rotation,
        //     )
        // })

        // paint obstacles
        this.gameState?.obstacles.forEach(obstacle => {
            this.renderer.paintPolygon(
                obstacle.polygon,
                obstacle.x,
                obstacle.y,
                obstacle.rotation,
            )
        })

        // paint score
        this.renderer.paintScore(this.gameState?.score)
    }
}