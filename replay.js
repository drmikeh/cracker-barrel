const Game = require('./game');

function replay(solution) {
    console.log('Replaying Solution')
    let game = new Game(0)
    game.print()
    solution.forEach(move => {
        game.move(move)
        game.print()
    })
}

module.exports = replay;