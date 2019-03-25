// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}
const game = {
    playerHand: '',
    aiHand: '',
    playerHandHTML: ''
}
const hands = [...document.querySelectorAll('.select img')];
console.log(Array.isArray(hands));
// const HandSelection = function() {
//     console.log(this);
// }
// const HandSelection = (e) => {
//     // arrow function nie tworzy thisa tylko go dziedziczy z obiektu wyżej
//     // console.log(this);
//     // zamiast this można użyć event
//     console.log(e.target);
//     console.log(e.currentTarget);
// }
function HandSelection() {
    game.playerHand = this.dataset.option;
    // game.playerHand = this.className;
    hands.forEach(item => item.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
    console.log(game.playerHand);
}
function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}
function checkResult(player, ai) {
    console.log(player, ai);
    
    if(player === ai) {
        return 'draw';
    } else if((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'you win';
    } else {
        return 'you loss';
    }
}
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    // document.querySelector('[data-summary="who-win"]').textContent = result;
    document.querySelector('.numbers span').textContent = ++gameSummary.numbers;
    
    if(result === 'you win') {
        document.querySelector('.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś';
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if(result === 'you loss') {
        document.querySelector('.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = 'Komputer wygrał :-(';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    }  else {
        document.querySelector('.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis';
        document.querySelector('[data-summary="who-win"]').style.color = 'white';
    }
}
function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
    
}
function startGame() {
    if(!game.playerHand) return alert('Wybierz dłoń !!!');
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
    console.log(gameResult);
};

hands.forEach(item => item.addEventListener('click', HandSelection));
document.querySelector('.start').addEventListener('click', startGame);