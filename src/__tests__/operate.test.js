import operate from '../logic/operate'
describe('operate', () => {
  it('should accept a string and perform an operation correctly', () => {
    expect(operate('2', '3', 'x')).toEqual('6')
  })
})

it('should accept numbers and perform an operation correctly', () => {
  expect(operate(5,25, '+')).toEqual('30')
})
