import { Player, Enemy, Obstacle, Ballistic } from "./bodies.js";


export class GameState {
    obstacles: Obstacle[]
    enemies: Enemy[]
    players: Player[]
    ballistics: Ballistic[]
    lastUpdated: number

    constructor() {
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
        this.lastUpdated = performance.now()
    }

    update = () => {
        const updateTime = performance.now()
        const timeDelta = performance.now() - this.lastUpdated
        this.lastUpdated = updateTime

        this.players.forEach(player => { player.update(timeDelta) })

        console.log("updating game state")
        //TODO: implement
    }

    createPlayer = () => {
        //TODO: implement
        // const player = new Player(
        //     health = 100,
        //     controller_uuid = "" "TODO: implement",
        // )
        // this.players.push(player)
    }

}

