import Game from './game.js';
import solve from './solve.js';
import replay from './replay.js';

const myArgs = process.argv.slice(2);
const findAllSolutions = myArgs[0] === '-a' || myArgs[0] === '--all';

// find all solutions for starting with a hole at index 0, 1, 3, and 4
// (all other starting points are isomorphic to these).
// starting with a hole at index 0 resulted in 29760 solutions
// starting with a hole at index 1 resulted in 14880 solutions
// starting with a hole at index 3 resulted in 85258 solutions
// starting with a hole at index 4 resulted in 1550 solutions
if (findAllSolutions) {
    [0, 1, 3, 4].forEach(index => {
        const game = new Game(index);
        const solutions = solve(game);
        console.log(
            `starting with a hole at index ${index} resulted in ${solutions.length} solutions`,
        );
    });
} else {
    // print the first solution
    const game = new Game(0);
    const firstSolution = solve(game)[0];
    replay(firstSolution.history);
}
