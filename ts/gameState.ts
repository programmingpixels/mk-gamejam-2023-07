import { Player, Enemy, Obstacle, Ballistic } from "./bodies.js";
import { InputState } from "./inputs.js";


export class GameState {
    obstacles: Obstacle[]
    enemies: Enemy[]
    players: Player[]
    ballistics: Ballistic[]
    lastUpdated: number

    constructor(playerNum: number = 1) {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];

        for (let i = 0; i < playerNum; i++) {
            this.addPlayer()
        }

        // create some enemies
        for (let i = 0; i < 1; i++) {
            this.addEnemy()
        }

        // create some obstacles
        for (let i = 0; i < 1; i++) {
            this.addObstacle()
        }

        // do this last
        this.lastUpdated = performance.now()
    }

    update = (inputStates: InputState[]) => {
        const updateTime = performance.now()
        const timeDelta = performance.now() - this.lastUpdated
        this.lastUpdated = updateTime

        // update the player location, direction, velocity
        this.players.forEach(player => { player.update(timeDelta, inputStates[0]) })

        // add ballistics
        // TODO: add ballistics

        console.log("updating game state")
    }

    addPlayer = () => {
        const player = new Player()
        this.players.push(player)
    }

    addEnemy = () => {
        const enemy = new Enemy()
        this.enemies.push(enemy)
    }

    addObstacle = () => {
        const obstacle = new Obstacle()
        this.obstacles.push(obstacle)
    }
}

