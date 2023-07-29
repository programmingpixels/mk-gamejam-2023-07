"use strict";
define("bodies", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RedBlue = void 0;
    var RedBlue;
    (function (RedBlue) {
        RedBlue[RedBlue["Red"] = 0] = "Red";
        RedBlue[RedBlue["Blue"] = 1] = "Blue";
    })(RedBlue || (exports.RedBlue = RedBlue = {}));
});
const updateGameState = () => {
    //TODO:
    collectInputs();
    // TODO: apply forces to all bodies
    // updatePlayer();
};
const collectInputs = () => {
    //TODO:
};
const startGame = () => {
    // TODO: populate game state
    // gameState = new GameState();
};
define("star", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Star = void 0;
    const COLORS = ["#010101", "#232323", "#454545", "#676767", "#898989", "#ABABAB", "#CDCDCD", "#EFEFEF", "#FFFFFF",
        "#EFEFEF", "#CDCDCD", "#ABABAB", "#898989", "676767", "454545", "232323"];
    class Star {
        constructor(canvasWidth, canvasHeight) {
            this.getColorHex = () => {
                return COLORS[this.color];
            };
            this.update = () => {
                this.timeLeft -= 1;
                if (this.timeLeft <= 0) {
                    this.timeLeft = this.period;
                    this.color += 1;
                    if (this.color > (COLORS.length - 1)) {
                        this.color = 0;
                    }
                }
            };
            this.x = Math.floor(Math.random() * canvasWidth);
            this.y = Math.floor(Math.random() * canvasHeight);
            this.period = Math.floor((Math.random() * 10) + 1);
            this.timeLeft = this.period;
            this.color = Math.floor(Math.random() * COLORS.length);
        }
    }
    exports.Star = Star;
});
define("screen", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Screen = void 0;
    const CONFIG = {
        canvasWidth: 1000,
        canvasHeight: 800,
        bgColor: "#000000"
    };
    class BrushableHtmlCanvasElement extends HTMLCanvasElement {
        constructor() {
            super();
            this.ctx = this.getContext("2d");
        }
    }
    class Screen {
        constructor() {
            this.paintBackgroundColor = () => {
                this.visibleCanvas.ctx.fillStyle = CONFIG.bgColor;
                this.visibleCanvas.ctx.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
            };
            this.paintSquare = () => {
                this.visibleCanvas.ctx.fillStyle = '#FF0000';
                this.visibleCanvas.ctx.fillRect((CONFIG.canvasWidth / 2) - 10, (CONFIG.canvasHeight / 2) - 10, 20, 20);
            };
            this.paintStars = (stars) => {
                stars.forEach(star => {
                    this.visibleCanvas.ctx.fillStyle = star.getColorHex();
                    this.visibleCanvas.ctx.fillRect(star.x, star.y, 1, 1);
                });
            };
            //make an off screen canvas to hold all the sprites
            this.invisibleCanvas = document.createElement("canvas");
            this.invisibleCanvas.width = CONFIG.canvasWidth;
            this.invisibleCanvas.height = CONFIG.canvasHeight;
            this.invisibleCanvas.ctx = this.invisibleCanvas.getContext("2d");
            //make an on screen canvas to draw things
            this.visibleCanvas = document.getElementById("frontCanvas");
            this.visibleCanvas.width = CONFIG.canvasWidth;
            this.visibleCanvas.height = CONFIG.canvasHeight;
            this.visibleCanvas.ctx = this.visibleCanvas.getContext("2d");
        }
    }
    exports.Screen = Screen;
});
define("titleScreen", ["require", "exports", "star"], function (require, exports, star_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TitlePage = void 0;
    class TitlePage {
        constructor(canvasWidth, canvasHeight, numOfStars = 20) {
            this.update = () => {
                this.stars.forEach(star => {
                    star.update();
                });
            };
            this.stars = [];
            for (let i = 0; i < numOfStars; i++) {
                this.stars.push(new star_1.Star(canvasWidth, canvasHeight));
            }
        }
    }
    exports.TitlePage = TitlePage;
});
define("states", ["require", "exports", "screen", "titleScreen"], function (require, exports, screen_1, titleScreen_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationState = exports.GameState = void 0;
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
});
// TODO: make since call to initialse
define("index", ["require", "exports", "states"], function (require, exports, states_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.main = void 0;
    const appState = new states_1.ApplicationState();
    const main = () => {
        appState.update();
        appState.paint();
        window.requestAnimationFrame(exports.main);
    };
    exports.main = main;
    //this kicks off the animating
    window.requestAnimationFrame(exports.main);
});
define("polygon", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Polygon = void 0;
    const COLORS = ["#4B0082", "#250041", "#120020"];
    class Polygon {
        constructor(x, y, sides, size) {
            this.getColorHex = () => {
                return COLORS[this.color];
            };
            this.x = x;
            this.y = y;
            this.sides = sides;
            this.size = size;
            this.color = Math.floor(Math.random() * COLORS.length);
        }
    }
    exports.Polygon = Polygon;
});
