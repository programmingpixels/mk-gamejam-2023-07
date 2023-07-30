import { GameState } from "./gameState.js";
import { TitlePage } from "./titlePage.js";
import { Renderer } from "./renderer.js";
export class ApplicationState {
    constructor() {
        this.update = (inputStates) => {
            if (this.titlePage) {
                if (!this.titlePage.update(inputStates)) {
                    this.startGame();
                }
            }
            else if (this.gameState) {
                this.gameState.update(inputStates);
            }
        };
        this.startGame = () => {
            this.titlePage = undefined;
            this.gameState = new GameState();
        };
        this.paint = () => {
            this.renderer.paintBackgroundColor();
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
                this.renderer.paintStars(this.titlePage.stars);
            }
            this.renderer.paintTitle("bold 36px Courier", "#11FF11");
            this.renderer.paintPressStartGame("bold 28px Courier", this.titlePage.stars[0].getColorHex());
            this.renderer.paintPolygon(this.titlePage.polygon, 500, 500);
        };
        this.paintGameState = () => {
            var _a, _b, _c, _d;
            // paint players
            this.renderer.paintPolygon((_a = this.gameState) === null || _a === void 0 ? void 0 : _a.players[0].polygon, (_b = this.gameState) === null || _b === void 0 ? void 0 : _b.players[0].x, (_c = this.gameState) === null || _c === void 0 ? void 0 : _c.players[0].y, (_d = this.gameState) === null || _d === void 0 ? void 0 : _d.players[0].rotation);
        };
        this.renderer = new Renderer();
        this.titlePage = new TitlePage(this.renderer.visibleCanvas.width, this.renderer.visibleCanvas.height);
    }
}
