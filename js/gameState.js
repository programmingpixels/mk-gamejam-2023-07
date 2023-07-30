import { Player, Enemy, Obstacle } from "./bodies.js";
export class GameState {
    constructor(playerNum = 3) {
        this.score = 0;
        this.update = (inputStates) => {
            const updateTime = performance.now();
            const timeDelta = performance.now() - this.lastUpdated;
            this.lastUpdated = updateTime;
            // update the player location, direction, velocity
            this.players.forEach(player => { player.update(timeDelta, inputStates[0]); });
            // cycle obstacles every 3 seconds
            if ((updateTime - this.lastObstacleCreated) > 3000) {
                this.removeOldestObstacle();
                this.addObstacle();
            }
            this.score = Math.floor((updateTime - this.gameStartTime) / 1000);
            // check for game over
            let isGameOver = false;
            if (isGameOver) {
                console.log("end game");
                return false;
            }
            return true;
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
        this.removeOldestObstacle = () => {
            // remove the oldest obstacle
            this.obstacles.shift();
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
            this.addPlayer(25, 350, 550);
            this.addPlayer(75, 650, 550);
            this.addPlayer(50, 500, 350);
        }
        // // create some enemies
        // for (let i = 0; i < 1; i++) {
        //     this.addEnemy()
        // }
        // create some obstacles
        for (let i = 0; i < 15; i++) {
            this.addObstacle();
        }
        // do this last
        this.gameStartTime = performance.now();
        this.lastUpdated = this.gameStartTime;
        this.lastObstacleCreated = this.gameStartTime;
    }
}
