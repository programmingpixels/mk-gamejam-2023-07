export class GameState {
    constructor() {
        this.update = () => {
            const updateTime = performance.now();
            const timeDelta = performance.now() - this.lastUpdated;
            this.lastUpdated = updateTime;
            this.players.forEach(player => { player.update(timeDelta); });
            console.log("updating game state");
            //TODO: implement
        };
        this.createPlayer = () => {
            //TODO: implement
            // const player = new Player(
            //     health = 100,
            //     controller_uuid = "" "TODO: implement",
            // )
            // this.players.push(player)
        };
        this.obstacles = [];
        this.enemies = [];
        this.players = [];
        this.ballistics = [];
        this.lastUpdated = performance.now();
    }
}
