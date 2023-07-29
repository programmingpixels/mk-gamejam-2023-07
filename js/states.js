import { Screen } from "./screen.js";
import { TitlePage } from "./titlePage.js";
export class GameState {
    constructor() {
        this.update = () => {
            console.log("updating game state");
            //TODO: implement
        };
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
    }
}
export class ApplicationState {
    constructor() {
        this.update = () => {
            if (this.titlePage) {
                this.titlePage.update();
            }
            else if (this.gameState) {
                this.gameState.update();
            }
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
        this.paintTitlePage = () => {
            var _a;
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
