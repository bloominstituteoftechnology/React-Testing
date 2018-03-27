import sinon from 'sinon';
import calculate from '../logic/calculate';
const funcs = require('../logic/calculate');
// import calculate from '../l'

describe('calculate', () => {
    const obj = {
        total: null,
        next: null,
        operation: null
    }
    it('should correctly change state when calculating', () => {
        expect(calculate(obj, '0')).toEqual({"next": "0", "total": null})
    })
    it('should return null state when pressing AC button', () => {
        const newState = {
            total: 345,
            next: 23,
            operation: '+'
        }
        expect(calculate(newState, 'AC')).toEqual(obj)
    })
})