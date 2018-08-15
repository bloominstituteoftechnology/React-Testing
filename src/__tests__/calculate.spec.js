import calculate from '../logic/calculate';

const nullState = {
    total:null,
    next:null, 
    operation: null
};

describe('calculate', () => {
    it('should return null state when AC button is clicked', () => {
        const inputState = {
            total: '154',
            next: '90',
            operation: '+',
        };
        const buttonName = 'AC'
        const rv = calculate(inputState,buttonName)
        expect (rv).toEqual(nullState);
    })

    // it('accepts a string or number as input', () => {
    //     const result = operate(1, 2, "+");
    //     expect(result).toEqual('3')  
    //   })
})