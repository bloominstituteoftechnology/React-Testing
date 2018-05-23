import operate from '../logic/operate'

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3')
  })

  it('subtracts two numbers', () => {
    expect(operate(1, 2, '-')).toBe('-1')
  })

  it('multiplies two numbers', () => {
    expect(operate(3, 2, 'x')).toBe('6')
  })

  it('divides two numbers', () => {
    expect(operate(1, 2, '÷')).toBe('0.5')
  })

  it('modulos two numbers', () => {
    expect(operate(1, 2, '%')).toBe('1')
  })

  it('throws when given invalid op', () => {
    expect(() => operate(1, 2, '?')).toThrow()
  })
})