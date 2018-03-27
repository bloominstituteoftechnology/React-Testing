import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  it('returns an answer as a String', () => {
    const answer = operate(1, 2, '+');
    expect(typeof answer).toBe('string');
  });

  it('throws an error for an unknown operation', () => {
    const operation = '*';
    expect(() => {
      operate(4, 90, operation);
    }).toThrowError(`Unknown operation ${operation}`);
  });

  it('shouldn\'t crash when multiple operators are clicked in succession', () => {
    const operation = operate(1, '+', '+');
    expect(typeof operation).not.toBe('undefined');
  });
});
