import { Player, Enemy, Obstacle } from "./bodies";

export class GameState {
    obstacles: Obstacle[];
    enemies: Enemy[];
    players: Player[];
    constructor() {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
    }

}

export class ApplicationState {
    gameState: GameState | null
}

