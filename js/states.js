class GameState {
    constructor() {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.players = [];
    }

}

class ApplicationState {
    constructor() {

    }

    startGame() {
        this.gameState = new GameState();
    }
}

