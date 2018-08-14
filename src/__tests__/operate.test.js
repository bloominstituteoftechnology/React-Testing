import operate from '../logic/operate';

describe('Operate', () => {
  it(`knows that 1 + 2 is '3'`, () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it(`knows that 10 x 4 is '40'`, () => {
    expect(operate(10, 4, 'x')).toBe('40');
  });

  it(`knows that 50 ÷ 5 is '10'`, () => {
    expect(operate(50, 5, '÷')).toBe('10');
  });

  it(`knows that 12 % 10 is '2'`, () => {
    expect(operate(12, 10, '%')).toBe('2');
  });

  it(`knows that 10 😭 4 throws the error 'Unknown operation 😭'`, () => {
    expect(() => { operate(10, 4, '😭') }).toThrow('Unknown operation 😭');
  });
});
