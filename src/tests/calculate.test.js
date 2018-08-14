import calculate from '../logic/calculate'

describe('<calculate />', () => {
  describe('`isNumber`', () => {})

  describe('`calculate`', () => {
    it("should clear the display when 'AC' button is clicked", () => {
      const AC = calculate(
        { total: '4534634653452', next: null, operation: null },
        'AC'
      )
      expect(AC).toEqual({ total: null, next: null, operation: null });
    });
    it("should return empty object if both button and next value are '0'", () => {
      const input = calculate({ total: null, next: '0', operation: '+' }, '0')
      expect(input).toEqual({});
    });
    it("should return total with a decimal point if '.' button is clicked", () => {
      const decimal = calculate(
        { total: '5', next: null, operation: null },
        '.'
      )
      expect(decimal).toEqual({ total: '5.' });
    });
    it('should return new total if total, next, operation are all clicked', () => {
      const total = calculate({ total: '1', next: '9', operation: '+' }, '=')
      expect(total).toEqual({ total: '10', next: null, operation: null });
    });
    it("should reverse the positive/negative value if '+/-' button is clicked", () => {
      const reverse = calculate(
        { total: null, next: '-198', operation: null },
        '+/-'
      )
      expect(reverse).toEqual({ next: '198' });
    });
  });
});