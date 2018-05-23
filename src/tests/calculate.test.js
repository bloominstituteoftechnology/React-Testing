import calculate from '../logic/calculate'

describe('calculate', () => {
  let obj
  const ops = ['+', '-', '÷', '%', 'x']
  beforeEach(() => {
    obj = {
      total: null,
      next: null,
      operation: null
    }
  })
  it('adds values to state.next if a number is pressed', () => {
    for (let i = 0; i < 10; i++) {
      expect(calculate({}, i.toString())).toEqual({ next: i.toString(), total: null })
    }
  })

  it('concatenates new values to the existing next value', () => {
    for (let i = 1; i < 10; i++) {
      obj = calculate(obj, i.toString())
    }

    expect(obj).toEqual({ total: null, next: "123456789" })
  })

  it('allows a decimal to be placed in the next value', () => {
    expect(calculate(obj, '.')).toEqual({ total: '0.' })
    obj.total = null
    obj = calculate(obj, '1')
    obj = calculate(obj, '.')
    expect(calculate(obj, '0')).toEqual({ next: '1.0', total: null })
  })

  it('stores an operation', () => {
    obj.next = 1
    ops.forEach(op => {
      expect(calculate(obj, op)).toEqual({ total: 1, next: null, operation: op })
    })
    obj = { total: 1, next: null }
    ops.forEach(op => {
      expect(calculate(obj, op)).toEqual({ operation: op })
    })
  })

  it('performs an operation when eq is passed', () => {
    obj = {
      total: 1,
      next: 1,
      operation: '+'
    }
    expect(calculate(obj, '=')).toEqual({ total: '2', next: null, operation: null })
  })

  it('performs op and stores another when a second op is passed', () => {
    obj = {
      total: 1,
      next: 1,
      operation: '+'
    }
    ops.forEach(op => {
      expect(calculate(obj, op)).toEqual({ total: '2', next: null, operation: op })
    })
  })

  it('reverses the sign of next if present, or total', () => {
    obj.total = 1
    expect(calculate(obj, '+/-')).toEqual({ total: '-1' })
    obj.next = 1
    expect(calculate(obj, '+/-')).toEqual({ next: '-1' })
  })

  it('clears the state when "AC" is pressed', () => {
    obj = { total: 1, next: 1, operation: '+' }
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null })
  })
})