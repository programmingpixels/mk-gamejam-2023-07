import { GameState } from "./gameState.js";
import { TitlePage } from "./titlePage.js";
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
