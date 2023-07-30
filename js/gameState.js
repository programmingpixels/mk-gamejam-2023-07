import { Player } from "./bodies.js";
export class GameState {
    constructor(playerNum = 1) {
        this.update = (inputStates) => {
            const updateTime = performance.now();
            const timeDelta = performance.now() - this.lastUpdated;
            this.lastUpdated = updateTime;
            this.players.forEach(player => { player.update(timeDelta, inputStates[0]); });
            console.log("updating game state");
            //TODO: implement
        };
        this.addPlayer = () => {
            const player = new Player(100);
            this.players.push(player);
        };
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
        for (let i = 0; i < playerNum; i++) {
            this.addPlayer();
        }
        // do this last
        this.lastUpdated = performance.now();
    }
}
