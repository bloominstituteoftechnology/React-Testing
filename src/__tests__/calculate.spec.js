import calculate from '../logic/calculate';

describe('calculate', () => {
    it('should return an object that sets total, next, and operation to null when `AC` is clicked', () => {
        const testState = { total: '10', next: '5', operation: '-' };
        const state = calculate(testState, 'AC');

        expect(state).toEqual({ total: null, next: null, operation: null })
    })

    it('should return an empty object if `buttonName` and `next` are equal to 0', () => {
        const testState = { total: '10', next: '0', operation: '-' };
        const state = calculate(testState, '0');

        expect(state).toEqual({});
    })

    it('should return an object with `next` + `buttonName` if they both exist', () => {
        const testState = { total: '10', next: '5', operation: '+' };
        const state = calculate(testState, '3');

        expect(state).toEqual({ next: '53' });
    })

    it('should return an object with `next` and `total = null` if next exists', () => {
        const testState = { total: '10', next: '5', operation: null };
        const state = calculate(testState, '2');

        expect(state).toEqual({ next: '52', total: null });
    })

    it('should return an object that adds a decimal after `next` when the `.` operation is clicked', () => {
        const testState = { total: '5', next: '10', operation: null };
        const state = calculate(testState, '.');

        expect(state).toEqual({ next: '10.' });
    })

    it('should return an object with the new total when the `=` operation is clicked', () => {
        const testState = { total: '5', next: '10', operation: '+' };
        const state = calculate(testState, '=');

        expect(state).toEqual({ total: '15', next: null, operation: null });
    })

    it('should return an object with the `next` or `total` value being toggled when clicked to either negative or positive', () => {
        const testState = { total: '5', next: '10', operation: null };
        const state = calculate(testState, '+/-');

        expect(state).toEqual({ next: '-10' })
    })
})