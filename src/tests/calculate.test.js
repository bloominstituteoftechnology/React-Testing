import calculate from '../logic/calculate'

describe('calculate', () => {
  let state

  beforeEach(() => {
    state = {
      total: 0,
      next: null,
      operation: null,
    }
  })

  it('should return null state when AC is pressed', () => {
    const newState = {
      total: null,
      next: null,
      operation: null,
    }
    expect(calculate(state, 'AC')).toEqual(newState)
  })

  describe('isNumber', () => {
    it('should return {} if buttonName is "0" and obj.next is "0"', () => {
      expect(calculate({ ...state, next: '0' }, '0')).toEqual({})
    })

    it('should return { next: "8", total: null } if buttonName is "8"', () => {
      expect(calculate(state, '8')).toEqual({ next: '8', total: null })
    })
  })

  describe('buttonName === "."', () => {
    it('should return {} if buttonName is "." and obj.next includes "."', () => {
      expect(calculate({ ...state, next: '8.88' }, '.')).toEqual({})
    })

    it('should return "0." as default', () => {
      expect(calculate(state, '.')).toEqual({ total: '0.' })
    })
  })

  describe('buttonName === "="', () => {
    it('should return {} if state next and operation have no values', () => {
      expect(calculate(state, '=')).toEqual({})
    })

    it('should correctly calculate values', () => {
      expect(calculate({ total: '8', next: '8', operation: '+' }, '=')).toEqual({
        operation: null,
        next: null,
        total: '16',
      })
    })
  })

  describe('buttonName === "+/-"', () => {
    it('should correctly flip a positive integer to a negative integer', () => {
      expect(calculate({ ...state, next: '8' }, '+/-')).toEqual({ next: '-8' })
    })
  })
})
