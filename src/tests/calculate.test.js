import calculate from "../logic/calculate.js";

describe('calculate', () => {
    describe('AC', () => {
        it('returns null state if parameter is AC', () => {
            const obj = { total: '100', next: '100', operation: '' };
            const buttonName = 'AC';
            const expected = { total: null, next: null, operation: null };
            expect(calculate(obj, buttonName)).toEqual(expected);
        });
    });
    describe('isNumber', () => {
        it('returns an empty object if the button name is 0 & obj.next is 0', () => {
            const obj = {};
            const buttonName = 'AC';
            const expected = { total: null, next: null, operation: null };
            expect(calculate(obj, buttonName)).toEqual(expected);
        });
    });

});