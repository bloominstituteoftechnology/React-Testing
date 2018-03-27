import calculate from '../logic/calculate';

const sampleInputState = {
  total: 4,
  next: 2,
  operation: '+',
}

describe('`calculate`', () => {
  it('should return a \'calculator data\' object with props total, next, and operation', () => {
    const buttonName = 'Fake Button';
    const newState = calculate(sampleInputState, buttonName);
    expect(newState).toHaveProperty('total');
    expect(newState).toHaveProperty('next');
    expect(newState).toHaveProperty('operation');
  });
});