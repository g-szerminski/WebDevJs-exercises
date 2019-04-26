class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            // win: win,
            // bid: bid
            win,
            bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    };
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        // console.log(`ile razy grałeś: ${games}`);
        // console.log(`przegrane: ${wins}`);
        // console.log('wygrane: ' + losses);
        return [games, wins, losses];
    }
}
const stats = new Statistics;