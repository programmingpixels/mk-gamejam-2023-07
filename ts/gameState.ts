import { Player, Enemy, Obstacle, Ballistic } from "./bodies.js";


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

        // do this last
        this.lastUpdated = performance.now()
    }

    update = (inputs) => {
        const updateTime = performance.now()
        const timeDelta = performance.now() - this.lastUpdated
        this.lastUpdated = updateTime

        this.players.forEach(player => { player.update(timeDelta) })

        console.log("updating game state")
        //TODO: implement
    }

    addPlayer = () => {
        const player = new Player(
            100
        )
        this.players.push(player)
    }

}

