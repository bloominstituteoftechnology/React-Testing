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

function isNumber(x) {
  return !!x.match(/[0-9]+/);
}

describe('isNumber', () => {
  it ('should be a function', () => {
    expect(typeof isNumber).toBe('function');
  });

  it ('should return a boolean', () => {
    expect(typeof isNumber('banana')).toBe('boolean');
    expect(typeof isNumber('6')).toBe('boolean');
  });

  it ('should return true for a number and false for strings', () => {
    expect(isNumber('banana')).toBe(false);
    expect(isNumber('40')).toBe(true);
    expect(isNumber('6.256')).toBe(true);
    expect(isNumber('0.256')).toBe(true);
  });

  it ('should handle negative numbers', () => {
    expect(isNumber('-5')).toBe(true);
    expect(isNumber('-.01')).toBe(true);
  });

  it ('should return false for infinity (dividing by 0)', () => {
    expect(isNumber(`${6/0}`)).toBe(false);
  });
});
