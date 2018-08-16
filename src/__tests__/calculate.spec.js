const funcs = require('../logic/calculate');
  

describe('checks is the passed value is a number', () => {

it('should return true if the passed value is a number', () => {
    expect(funcs.calculate(9)).toEqual(true);
});
});
