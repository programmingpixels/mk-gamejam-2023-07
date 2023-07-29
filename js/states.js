"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationState = exports.GameState = void 0;
const screen_1 = require("./screen");
const titleScreen_1 = require("./titleScreen");
class GameState {
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
exports.GameState = GameState;
class ApplicationState {
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
        this.screen = new screen_1.Screen();
        this.titlePage = new titleScreen_1.TitlePage(this.screen.visibleCanvas.width, this.screen.visibleCanvas.height);
    }
}
exports.ApplicationState = ApplicationState;
