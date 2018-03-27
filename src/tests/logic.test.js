import funcs from '../logic/calculate';

describe('Caculate Functions', () => {
    describe('`isNumber`', () => {
      const isNumber = funcs.isNumber;
      it('should return Function type', () => {
          expect(typeof(isNumber)).toBe('function');
      });
      it('should return Number type', () => {
        const result = isNumber('10');
        // console.log(result);
        expect(result).toBe(true);
      });
      it('should return String type', () => {
        const result = isNumber('Number');
        // console.log(result);
        expect(result).toBe(false);
      });
    });
    describe('`calculate`', () => {
        const calculate = funcs.calculate;
        it('should return Function type', () => {
            expect(typeof(calculate)).toBe('function');
        });
        it('all values should be null', () => {
          const result = calculate({}, 'AC');
        //   console.log(result);
          expect(result.total).toBe(null);
          expect(result.next).toBe(null);
          expect(result.operation).toBe(null);
        });
        it('should return total: null, next: 0', () => {
            const result = calculate({}, '0');
            // console.log(result);
            expect(result.total).toBe(null);
            expect(result.next).toBe('0');
            // expect(result.operation).toBe(null);
        });
        it('should return undefined for all values', () => {
            const result = calculate({next: '0'}, '0');
            // console.log(result);
            expect(result.total).toBe(undefined);
            expect(result.next).toBe(undefined);
            expect(result.operation).toBe(undefined);
        });
        it('should return undefined for all values', () => {
            const result = calculate({next: '5'}, '+');
            // console.log(result);
            expect(result.total).toBe('5');
            // expect(result.next).toBe('5.');
            expect(result.operation).toBe('+');
        });
    });
});