import { Player, Enemy, Obstacle } from "./bodies.js";
export class GameState {
    constructor(playerNum = 3) {
        this.update = (inputStates) => {
            const updateTime = performance.now();
            const timeDelta = performance.now() - this.lastUpdated;
            this.lastUpdated = updateTime;
            // update the player location, direction, velocity
            this.players.forEach(player => { player.update(timeDelta, inputStates[0]); });
            // add ballistics
            // TODO: add ballistics
            console.log("updating game state");
        };
        this.addPlayer = (startColor, startX, startY) => {
            const player = new Player(startColor, startX, startY);
            this.players.push(player);
        };
        this.addEnemy = () => {
            const enemy = new Enemy();
            this.enemies.push(enemy);
        };
        this.addObstacle = () => {
            const obstacle = new Obstacle();
            this.obstacles.push(obstacle);
        };
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
        if (playerNum == 1) {
            this.addPlayer(50, 500, 550);
        }
        else if (playerNum == 2) {
            this.addPlayer(33, 300, 550);
            this.addPlayer(66, 700, 550);
        }
        else if (playerNum == 3) {
            this.addPlayer(25, 300, 550);
            this.addPlayer(75, 700, 550);
            this.addPlayer(50, 500, 250);
        }
        // // create some enemies
        // for (let i = 0; i < 1; i++) {
        //     this.addEnemy()
        // }
        // create some obstacles
        for (let i = 0; i < 1; i++) {
            this.addObstacle();
        }
        // do this last
        this.lastUpdated = performance.now();
    }
}
