class GameState {
    constructor() {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
    }

}

class ApplicationState {
    constructor() {

    }

    startGame() {
        this.gameState = new GameState();
    }
}

