import operate from '../logic/operate.js'

describe('Operate Function Test Suite', () => {

    it('adds two numbers together when given the + operator', () => {
        expect(operate(1, 2, '+')).toBe('3')
    })
    it('subtracts two numbers from each other when given the - operator', () => {
        expect(operate(1, 2, '-')).toBe('-1')
    })
    it('multiplies two numbers together when given the x operator', () => {
        expect(operate(1, 2, 'x')).toBe('2')
    })
    it('divides two numbers from each other when given the ÷ operator', () => {
        expect(operate(1, 2, '÷')).toBe('0.5')
    })
    it('gives the divisible of two numbers when given the % operator', () => {
        expect(operate(10, 2, '%')).toBe('0')
    })
    

})