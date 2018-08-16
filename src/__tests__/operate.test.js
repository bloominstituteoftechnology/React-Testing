import Big from 'big.js';
import operate from '../logic/operate';

const one = Big(1);
const two = Big(2);

describe('operate', () => {
  it('returns an answer as a "String"', () => {
    const answer = operate(one, two, '+');
    expect(typeof answer).toEqual('string');
  });

  it('does the correect "math"', () => {
    const answer = operate(two, one, '-');
    expect(answer).toEqual('1');
  });
});
