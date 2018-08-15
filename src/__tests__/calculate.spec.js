import calculate from '../logic/calculate';

const inProcess = { total: '9', next: '3', operation: '+' };
const next0 = { total: '9', next: '0', operation: null };
const cleared = { total: null, next: null, operation: null };

describe('Calculator', () => {
  it('clears when AC is pressed', () => {
    expect(calculate(inProcess, 'AC')).toEqual(cleared);
  })

  it('ignores 0 button when 0 is next', () => {
    expect(calculate(next0, '0')).toEqual({});
  })

})