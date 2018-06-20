const logic = require('../logic/calculate.js');

describe('calculate', () => {
    describe('isNumber', () => {
        it(' should return a number', () => {
            expect(logic.isNumber(2)).toEqual(2);
        })
    })
})