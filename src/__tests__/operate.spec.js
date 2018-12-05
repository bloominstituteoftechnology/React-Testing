import operate from '../logic/operate';

describe('Operate Logic Check', () => {
    it('is a function', () => {
        expect(typeof operate).toBe('function')  
    })

    it('can do math', () => {
        const one = 100;
        const two = 20;
        expect(operate(one, two, '+')).toStrictEqual('120')
        expect(operate(one, two, '-')).toStrictEqual('80')
        expect(operate(one, two, 'x')).toStrictEqual('2000')
        expect(operate(one, two, '÷')).toStrictEqual('5')
        expect(operate(one, two, '%')).toStrictEqual('0')
    });

    it('can deal with weird numbers', () => {
        const one = 1871;
        const two = -1;
        expect(operate(one, two, '+')).toStrictEqual('1870')
        expect(operate(one, two, '-')).toStrictEqual('1872')
        expect(operate(one, two, 'x')).toStrictEqual('-1871')
        expect(operate(one, two, '÷')).toStrictEqual('-1871')
        expect(operate(one, two, '%')).toStrictEqual('0')
    });
})
