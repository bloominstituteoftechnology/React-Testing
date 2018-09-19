import calculate from '../logic/calculate';

describe.only('calculate', () => {
  it('should clear the data', () => {
    const obj = {
      total: 'urmom',
      next: 'ur mom',
      operation: 'urmommm',
    };
    const actual = calculate(obj, 'AC');

    expect(actual.total).toBe(null);
    expect(actual.next).toBe(null);
    expect(actual.operation).toBe(null);
  });

  it('should return 2', () => {
    const obj = {
      total: '',
      next: '',
      operation: '+',
    };
    const actual = calculate(obj, '2');

    expect(actual.total).toBe(undefined);
    expect(actual.next).toBe('2');
    expect(actual.operation).toBe(undefined);
  });

  it('should return total', () => {
    const obj = {
      total: '3',
      next: '5',
      operation: 'x',
    };
    const actual = calculate(obj, '=');

    expect(actual.total).toBe('15');
    expect(actual.next).toBe(null);
    expect(actual.operation).toBe(null);
  });

  it('should return operation as buttonname', () => {
    const obj = {
      total: '6',
      next: '',
      operation: '',
    };
    const actual = calculate(obj, '%');

    expect(actual.total).toBe(undefined);
    expect(actual.next).toBe(undefined);
    expect(actual.operation).toBe('%');
  });
});
