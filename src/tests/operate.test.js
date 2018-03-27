import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  it('returns an answer as a String', () => {
    const answer = operate(1, 2, '+');
    expect(typeof answer).toBe('string');
  });
});