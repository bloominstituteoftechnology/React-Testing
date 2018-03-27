import calculate from '../logic/calculate';

describe('calculate', () => {

    it('should return object null', () => {
        const nullObj = { total: null, next: null, operation: null };
        const object = {total: "24", next: null, operation: '+'};
        const respObj = calculate(object, 'AC');
        expect(respObj).toEqual(nullObj);
    });
});

