import operate from '../logic/operate';


const Big = require('big.js');

describe('operate', () => {
    it('renders the calculation', () => {
        expect(operate(1,1,'+')).toBe('2');
        expect(operate(1,2,'x')).toBe('2');

    })
})