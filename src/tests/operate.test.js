import operate from '../logic/operate';

describe('operate', () => {

    it('should return one plus two', () => {
        const resp = operate(1, 2, '+');
        expect(resp).toEqual('3');
    });
    it('should return one minus two', () => {
        const resp = operate(1, 2, '-');
        expect(resp).toEqual('-1');
    });
    it('should return one times two', () => {
        const resp = operate(1, 2, 'x');
        expect(resp).toEqual('2');
    });
    it('should return one divided by two', () => {
        const resp = operate(1, 2, '÷');
        expect(resp).toEqual('0.5');
    });
    it('should return one mod two', () => {
        const resp = operate(1, 2, '%');
        expect(resp).toEqual('1');
    });
});