class Player {
    constructor() {
        this.name = null;
        this.distance = 0;
        this.index = 1;
    }
    getcount() {
        database.ref("playercount").on("value", (data) => {
            playercount = data.val();
        })
    }
    updatecount(count) {
        database.ref("/").update({
            playercount: count
        })
    }
    static getplayer() {
        database.ref("Players").on("value", (data) => {
            allPlayers = data.val();
        })
    }
    updateplayer(){
        database.ref("Players/player" + this.index).update({
            name : this.name,
            distance : this.distance
        })
    }
}