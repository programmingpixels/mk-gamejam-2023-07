import { Screen } from "./screen.js";
import { Player, Enemy, Obstacle, Ballistic } from "./bodies.js";
import { TitlePage } from "./titlePage.js";


export class GameState {
    obstacles: Obstacle[]
    enemies: Enemy[]
    players: Player[]
    ballistics: Ballistic[]
    lastUpdated: number

    constructor() {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
        this.lastUpdated = performance.now()
    }

    update = () => {
        const updateTime = performance.now()
        const timeDelta = performance.now() - this.lastUpdated
        this.lastUpdated = updateTime

        this.players.forEach(player => { player.update(timeDelta) })

        console.log("updating game state")
        //TODO: implement
    }

    createPlayer = () => {
        //TODO: implement
        // const player = new Player(
        //     health = 100,
        //     controller_uuid = "" "TODO: implement",
        // )
        // this.players.push(player)
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
