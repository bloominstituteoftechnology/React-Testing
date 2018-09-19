import operate from '../logic/operate';

describe('operate', () => {
  it('should handle expected operations', () => {
    expect(operate(3, 2, 'x')).toBe('6');
    expect(operate(3, 2, '+')).toBe('5');
    expect(operate(50, '48', '%')).toBe('2');
    expect(operate('3000000000', '2000000000', '-')).toBe('1000000000');
  });

  it('should throw an error given a non-operator', () => {
    expect(() => operate(3, 2, '$')).toThrow();
    expect(() => operate(3, 2, 12)).toThrow();
    expect(() => operate(3, 2)).toThrow();
  });
});
