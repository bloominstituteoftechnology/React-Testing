import calculate from '../logic/calculate';

const nullState = {
    total:null,
    next:null, 
    operation: null
};

describe('calculate function', () => {
    it('should return null state when AC button is clicked', () => {
        const inputState = {
            total: '154',
            next: '90',
            operation: '+',
        };
        const buttonName = 'AC'
        const rv = calculate(inputState,buttonName)
        expect (rv).toEqual(nullState);
    });

    it('should return the null state if `buttonName` and `next` are both 0', () => {
        const inputState = {
          total: null, 
          next: '0',
          operation: '+',
        };
        const buttonName = '0';
        const rv = calculate(inputState, buttonName);
        expect(rv).toEqual(nullState);
      });

      it('should update `total` appropriately when it receives the `=` operation', () => {
        const inputState = {
          total: '0',
          next: '15',
          operation: '-'
        };
        const buttonName = '=';
        const rv = calculate(inputState, buttonName);
        expect(rv).toEqual({
          total: '-15',
          next: null,
          operation: null,
        });
      });
})