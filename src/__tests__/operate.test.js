import operate from '../logic/operate.js'

describe('operate', () => {
  it('should return total as type string', () => {
    const total = operate(1, 2, '+')
    expect(typeof total).toEqual('string')
  })
  it("'+' should add two values together", () => {
    const operateTest = operate(2, 3, '+')
    expect(operateTest).toBe('5')
  })
  it("'-' should subtract one value from another", () => {
    const operateTest = operate(2, 3, '-')
    expect(operateTest).toBe('-1')
  })
  it("'x' should multiply two values", () => {
    const operateTest = operate(2, 3, 'x')
    expect(operateTest).toBe('6')
  })
  it("'÷' should divide one value from another", () => {
    const operateTest = operate(4, 2, '÷')
    expect(operateTest).toBe('2')
  })
  it("'%' should return the modulo of two values", () => {
    const operateTest = operate(4, 2, '%')
    expect(operateTest).toBe('0')
  })
  it("'**' should return an error", () => {
    const operateTest = '**'
    expect(() => {
      operate(4, 2, operateTest)
    }).toThrowError()
  })
})
