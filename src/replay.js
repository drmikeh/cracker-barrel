import Game from './game.js';

function replay(solution) {
    console.log('Replaying Solution');
    const game = new Game(0);
    game.print();
    solution.forEach(move => {
        game.move(move);
        game.print();
    });
}

export default replay;
