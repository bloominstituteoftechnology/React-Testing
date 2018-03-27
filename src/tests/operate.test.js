import sinon from 'sinon';
import operate from '../logic/operate';

describe('operate', () => {
    it('should correctly subtract 4 from 5', () => {
        expect(operate(5,4,'-')).toEqual('1');
    })
    it('should correctly multiply 8 by 4', () => {
        expect(operate(8,3,'x')).toEqual('24');
    })
    it('should correctly divide 12 by 3', () => {
        expect(operate(12,3,'÷')).toEqual('4');
    })
})