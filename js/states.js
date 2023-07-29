import { Screen } from "./screen.js";
import { TitlePage } from "./titlePage.js";
export class GameState {
    constructor() {
        this.update = () => {
            const updateTime = performance.now();
            const timeDelta = performance.now() - this.lastUpdated;
            this.lastUpdated = updateTime;
            this.players.forEach(player => { player.update(timeDelta); });
            console.log("updating game state");
            //TODO: implement
        };
        this.createPlayer = () => {
            //TODO: implement
            // const player = new Player(
            //     health = 100,
            //     controller_uuid = "" "TODO: implement",
            // )
            // this.players.push(player)
        };
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
        this.lastUpdated = performance.now();
    }
}
export class ApplicationState {
    constructor() {
        this.update = () => {
            const inputs = this.getInputs();
            if (this.titlePage) {
                this.titlePage.update(inputs);
            }
            else if (this.gameState) {
                this.gameState.update(inputs);
            }
        };

        this.startGame = () => {
            this.titlePage = undefined;
            this.gameState = new GameState();
        };

        this.paint = () => {
            this.screen.paintBackgroundColor();
            if (this.titlePage) {
                this.paintTitlePage();
            }
            else if (this.gameState) {
                this.paintGameState();
            }
        };

        this.getInputs = () => {
            //TODO: implement
            return []; // should return a list of uuid buttons/ inputs that are pressed
        };

        this.paintTitlePage = () => {
            var _a;
            //TODO: wtf is this?!?
            if ((_a = this.titlePage) === null || _a === void 0 ? void 0 : _a.stars) {
                this.screen.paintStars(this.titlePage.stars);
            }
        };

        this.paintGameState = () => {
            throw new Error("Method not implemented.");
        };
        this.screen = new Screen();
        this.titlePage = new TitlePage(this.screen.visibleCanvas.width, this.screen.visibleCanvas.height);
    }
}
