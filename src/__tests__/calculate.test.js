import calculate from '../logic/calculate'
describe('calculate', () => {
  it('it should perform an operation correctly', () => {
    const problem = {
      total     : '45',
      next      : '2',
      operation : 'x',
    }
    const solution = {
      total     : '90',
      next      : null,
      operation : null,
    }
    const problem1 = {
      total     : '15',
      next      : '200',
      operation : '+',
    }
    const solution1 = {
      total     : '215',
      next      : null,
      operation : null,
    }
    expect(calculate(problem, '=')).toEqual(solution)
  })
})
