import { GameState } from "./gameState.js";
import { TitlePage } from "./titlePage.js";
import { Renderer } from "./renderer.js";
export class ApplicationState {
    constructor() {
        this.freeze = false;
        this.update = (inputStates) => {
            if (this.freeze) {
                return;
            }
            if (this.titlePage) {
                if (!this.titlePage.update(inputStates)) {
                    this.startGame();
                }
            }
            else if (this.gameState) {
                if (!this.gameState.update(inputStates)) {
                    this.freeze = true;
                }
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
            this.renderer.paintPolygon(this.titlePage.polygon, 500, 300, 11);
        };
        this.paintGameState = () => {
            var _a, _b, _c;
            // paint players
            (_a = this.gameState) === null || _a === void 0 ? void 0 : _a.players.forEach(player => {
                this.renderer.paintPolygon(player.polygon, player.x, player.y, player.rotation);
            });
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
            (_b = this.gameState) === null || _b === void 0 ? void 0 : _b.obstacles.forEach(obstacle => {
                this.renderer.paintPolygon(obstacle.polygon, obstacle.x, obstacle.y, obstacle.rotation);
            });
            // paint score
            this.renderer.paintScore((_c = this.gameState) === null || _c === void 0 ? void 0 : _c.score);
        };
        this.renderer = new Renderer();
        this.titlePage = new TitlePage(this.renderer.visibleCanvas.width, this.renderer.visibleCanvas.height);
    }
}
