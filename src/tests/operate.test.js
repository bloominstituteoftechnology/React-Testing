import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  it('returns an answer as a String', () => {
    const answer = operate(1, 2, '+');
    expect(typeof answer).toBe('string');
  });

  it('shouldn\'t crash when multiple operators are clicked in succession', () => {
    const testCase = operate(1, '+', '+');
    expect(typeof testCase).not.toBe('undefined');
  });
});