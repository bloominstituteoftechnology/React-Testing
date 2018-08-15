import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should update "total" when it press "="', () => {
    const state = {
      total: '0',
      next: '15',
      operation: '-',
    };
    const buttonName = '=';
    const results = calculate(state, buttonName);
    expect(results).toEqual({
      total: '-15',
      next: null,
      operation: null,
    });
  });

  it('should update "total" when it press "+"', () => {
    const state = {
      total: '4',
      next: '5',
      operation: '+',
    };
    const buttonName = '+';
    const results = calculate(state, buttonName);
    expect(results).toEqual({
      total: '9',
      next: null,
      operation: '+',
    });
  });
});
