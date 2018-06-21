import operate from "../logic/operate.js";

describe.only('operate', () => {
    // adds
        it('adds two whole numbers together and returns its String equivalent', () => {
            expect(operate('1', '2', '+')).toBe('3');
        });
        it('adds two integers numbers together and returns its String equivalent', () => {
            expect(operate('1', '-2', '+')).toBe('-1');
        });
        it('adds two numbers together and returns its String equivalent', () => {
            expect(operate('1', '-2.5', '+')).toBe('-1.5');
        });
        it('adds two negative numbers together and returns its String equivalent', () => {
            expect(operate('-1', '-2.5', '+')).toBe('-3.5');
        });

    // subtracts
        it('subtracts two whole numbers together and returns its String equivalent', () => {
            expect(operate('1', '2', '-')).toBe('-1');
        });
        it('subtracts two integers numbers together and returns its String equivalent', () => {
            expect(operate('1', '-2', '-')).toBe('3');
        });
        it('subtracts two integers numbers together and returns its String equivalent', () => {
            expect(operate('1', '-2.5', '-')).toBe('3.5');
        });
        it('subtracts two negative integers numbers together and returns its String equivalent', () => {
            expect(operate('-1', '-2.5', '-')).toBe('1.5');
        });

    // multiplies
        it('multiplies two whole numbers together and returns its String equivalent', () => {
            expect(operate('2', '3', 'x')).toBe('6');
        });
        it('multiplies one whole number & one negative number together and returns its String equivalent', () => {
            expect(operate('2', '-3.12', 'x')).toBe('-6.24');
        });
        it('multiplies two negative integers together and returns its String equivalent', () => {
            expect(operate('-2', '-3', 'x')).toBe('6');
        });

    // divides
        it('divides two whole numbers together and returns its String equivalent', () => {
            expect(operate('7', '3', '÷')).toBe('2.33333333333333333333');
        });
        it('divides two integers together and returns its String equivalent', () => {
            expect(operate('7', '-3', '÷')).toBe('-2.33333333333333333333');
        });
        it('divides two numbers together and returns its String equivalent', () => {
            expect(operate('7', '-3.12', '÷')).toBe('-2.24358974358974358974');
        });
        it('divides two negative numbers together and returns its String equivalent', () => {
            expect(operate('-7', '-3.12', '÷')).toBe('2.24358974358974358974');
        });

    // remainder
        it('retuns the remainder of two whole numbers together and returns its String equivalent', () => {
            expect(operate('7', '3', '%')).toBe('1');
        });
        it('retuns the remainder of two whole numbers together and returns its String equivalent', () => {
            expect(operate('25', '7', '%')).toBe('4');
        });
        it('retuns the remainder of two integers together and returns its String equivalent', () => {
            expect(operate('7', '-3', '%')).toBe('1');
        });
        it('retuns the remainder of two numbers together and returns its String equivalent', () => {
            expect(operate('7', '-3.12', '%')).toBe('0.76');
        });
        it('retuns the remainder of two negative numbers together and returns its String equivalent', () => {
            expect(operate('-7', '-3.12', '%')).toBe('-0.76');
        });

    // error
        it('throws an Error `Unkown operation` be default', () => {
            expect(operate('1', '2', 'abc')).toThrowError(/Unknown operation/);
        });
});