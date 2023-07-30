import { GameState } from "./gameState.js";
import { TitlePage } from "./titlePage.js";
import { Renderer } from "./renderer.js";
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
            this.renderer.paintPressSpacebar("bold 28px Courier", this.titlePage.stars[0].getColorHex());
            this.renderer.paintPolygon(this.titlePage.polygon);
        };
        this.paintGameState = () => {
            throw new Error("Method not implemented.");
        };
        this.renderer = new Renderer();
        this.titlePage = new TitlePage(this.renderer.visibleCanvas.width, this.renderer.visibleCanvas.height);
    }
}
