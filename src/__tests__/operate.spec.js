import operate from '../logic/operate';

describe('operate', () => {
    it('should return total as a string', () => {
        const total = operate(1, 2, '+');
        expect(typeof total).toEqual('string');
    })

    it('should throw an error if operation doesnt exist', () => {
        expect(() => operate(1, 2, 'g')).toThrow();
    })

    it('should return correct totals', () => {
        expect(operate(1, 2, '+')).toEqual('3');
        expect(operate(1, 2, '-')).toEqual('-1');
        expect(operate(500, 20, 'x')).toEqual('10000');
        expect(operate(20, 2, '÷')).toEqual('10');
        expect(operate(5, 11, '%')).toEqual('5');
    })
}) 