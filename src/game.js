/*
A Game's state is represented as 15 values (of zero or one) in an array:

index:
         0
       1   2
     3   4   5
   6   7   8   9
 10  11  12  13  14
*/

// prettier-ignore
const POSSIBLE_MOVES = [
    [0, 1, 3], [0, 2, 5], [1, 3, 6], [1, 4, 8], [2, 4, 7], [2, 5, 9],
    [3, 1, 0], [3, 4, 5], [3, 6, 10], [3, 7, 12], [4, 7, 11], [4, 8, 13],
    [5, 2, 0], [5, 4, 3], [5, 8, 12], [5, 9, 14], [6, 3, 1], [6, 7, 8],
    [7, 4, 2], [7, 8, 9], [8, 4, 1], [8, 7, 6], [9, 5, 2], [9, 8, 7],
    [10, 6, 3], [10, 11, 12], [11, 7, 4], [11, 12, 13],
    [12, 7, 3], [12, 8, 5], [12, 11, 10], [12, 13, 14], [13, 8, 4], [13, 12, 11],
    [14, 9, 5], [14, 13, 12]
]

class Game {
    constructor(emptyIndexOrCurrentState, history = []) {
        if (Array.isArray(emptyIndexOrCurrentState)) {
            this.state = emptyIndexOrCurrentState;
        } else {
            const state = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            state[emptyIndexOrCurrentState] = 0;
            this.state = state;
        }
        this.history = history;
    }

    print() {
        console.log(`
    ${this.state[0]}
   ${this.state[1]} ${this.state[2]}
  ${this.state[3]} ${this.state[4]} ${this.state[5]}
 ${this.state[6]} ${this.state[7]} ${this.state[8]} ${this.state[9]}
${this.state[10]} ${this.state[11]} ${this.state[12]} ${this.state[13]} ${this.state[14]}
`);
        console.log('history:', this.history);
    }

    getLegalMoves() {
        return POSSIBLE_MOVES.filter(
            m =>
                this.state[m[0]] === 1 &&
                this.state[m[1]] === 1 &&
                this.state[m[2]] === 0,
        );
    }

    getCount() {
        return this.state.reduce((a, b) => a + b);
    }

    move(theMove) {
        const from = theMove[0];
        const between = theMove[1];
        const to = theMove[2];
        if (this.state[to] === 1)
            throw new Error(`INVALID MOVE ${theMove}: target is occupied.`);
        else if (this.state[between] === 0)
            throw new Error(`INVALID MOVE ${theMove}: between is empty.`);
        else {
            this.state[from] = 0;
            this.state[to] = 1;
            this.state[between] = 0;
            this.history.push(theMove);
        }
    }
}

export default Game;
