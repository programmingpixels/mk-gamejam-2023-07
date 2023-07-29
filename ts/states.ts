import { Screen } from "./screen.js";
import { Player, Enemy, Obstacle, Ballistic } from "./bodies.js";
import { TitlePage } from "./titlePage.js";


export class GameState {
    obstacles: Obstacle[];
    enemies: Enemy[];
    players: Player[];
    ballistics: Ballistic[];

    constructor() {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];

    }

    update = () => {
        console.log("updating game state")
        //TODO: implement
    }

}

export class ApplicationState {
    titlePage: TitlePage | undefined
    gameState: GameState | undefined
    screen: Screen

    constructor() {
        this.screen = new Screen()
        this.titlePage = new TitlePage(this.screen.visibleCanvas.width, this.screen.visibleCanvas.height)
    }

    update = () => {
        if (this.titlePage) {
            this.titlePage.update()
        }
        else if (this.gameState) {
            this.gameState.update()
        }
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

    paintTitlePage = () => {
        if (this.titlePage?.stars) {
            this.screen.paintStars(this.titlePage.stars)
        }
    }
    paintGameState = () => {
        throw new Error("Method not implemented.");
    }

}
