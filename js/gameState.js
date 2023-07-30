import { Player, Enemy, Obstacle } from "./bodies.js";
import { CONFIG } from "./CONFIG.js";
export class GameState {
    constructor(playerNum = 3) {
        this.score = 0;
        this.update = (inputStates) => {
            const updateTime = performance.now();
            const timeDelta = performance.now() - this.lastUpdated;
            this.lastUpdated = updateTime;
            // update the player location, direction, velocity
            this.players.forEach(player => { player.update(timeDelta, inputStates[0]); });
            // update each obstacble location
            this.obstacles.forEach(obstacle => { obstacle.update(timeDelta); });
            // add ballistics
            // TODO: add ballistics
            // add obstacles every 2 seconds
            if ((updateTime - this.lastObstacleCreated) > 1000) {
                this.addObstacle();
                if (this.obstacles.length > 25) {
                    this.removeOldestObstacle();
                }
                this.lastObstacleCreated = updateTime;
            }
            this.score = Math.floor((updateTime - this.gameStartTime) / 1000);
            // check for game over
            let isGameOver = false;
            this.players.forEach(player => {
                // for each obstacle
                this.obstacles.forEach(obstacle => {
                    if (obstacle.x < 0 || obstacle.x > CONFIG.canvasWidth || obstacle.y < 0 || obstacle.y > CONFIG.canvasHeight) {
                    }
                    else {
                        var x = player.x - obstacle.x;
                        var y = player.y - obstacle.y;
                        var distance = Math.sqrt((x * x) + (y * y));
                        if (distance < player.polygon.radius + obstacle.polygon.radius) {
                            console.log(distance);
                            console.log(player.x);
                            console.log(player.y);
                            console.log(player.polygon.radius);
                            console.log(obstacle.x);
                            console.log(obstacle.y);
                            console.log(obstacle.polygon.radius);
                            isGameOver = true;
                        }
                    }
                });
            });
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
            console.log(this.obstacles);
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
        // do this last
        this.gameStartTime = performance.now();
        this.lastUpdated = this.gameStartTime;
        this.lastObstacleCreated = this.gameStartTime;
    }
}
