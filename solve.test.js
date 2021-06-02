const Game = require('./game')
const solve = require('./solve')

const countOnes = arr => arr.reduce((sum, n) => sum + n, 0)

describe('solve', () => {
    it('solves a game leaving just one tee', () => {
        const game = new Game(0)
        const solution = solve(game)[0]
        console.log(solution)
        expect(solution).toBeDefined()
        expect(solution).not.toBeNull()

        expect(solution.state).toBeArray()
        expect(solution.state).toBeArrayOfSize(15)
        const numTeesLeft = countOnes(solution.state)
        expect(numTeesLeft).toBe(1)

        expect(solution.history).toBeArray()
        expect(solution.history).toBeArrayOfSize(13)
    })
})
