import operate from '../logic/operate'
describe('operate', () => {
  it('should accept a string', () => {
    expect(operate('2', '3', 'x')).toEqual('6')
  })
})

it('should except numbers', () => {
  expect(operate(5,25, '+')).toEqual('30')
})
