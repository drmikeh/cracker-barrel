const Game = require('./game');

function solve(game, solutions = []) {
    let legalMoves = game.getLegalMoves()
    if (legalMoves.length === 0) {
        let finalScore = game.getCount()
        if (finalScore === 1) {
            solutions.push(game)
        }
    }
    else {
        legalMoves.forEach(move => {
            let tryGame = new Game(game.state.slice(0), game.history.slice(0))
            tryGame.move(move)
            solve(tryGame, solutions)
        })
    }
    return solutions
}

module.exports = solve;