import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  it('should return a string for each case', () => {
    const answer = operate(1, 2, '%');
    expect(typeof answer).toEqual('string');
  });
  it('should accept strings or numbers as input', () => {
    const answer = operate('4', 4, 'x');
    expect(answer).toEqual('16');
  });
  it('should throw an error `Unknown operation`', () => {
    const operation = '/';
    expect(() => {
      operate(3, 7, operation);
    }).toThrowError(`Unknown operation ${operation}`);
  });
});
