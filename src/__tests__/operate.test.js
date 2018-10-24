import operate from '../logic/operate.js';

describe('operate.js', () => {
	describe('adding two numbers', () => {
		it('should return the right answer', () => {
			expect(operate('0', '-1', '+')).toBe('-1');
			expect(operate('-1.5', '1', '+')).toBe('-0.5');
			expect(operate('0', '0', '+')).toBe('0');
		});
	});

	describe('subtracting two numbers', () => {
		it('should return the right answer', () => {
			expect(operate('0', '-1', '-')).toBe('1');
			expect(operate('-1.5', '1', '-')).toBe('-2.5');
			expect(operate('0', '0', '-')).toBe('0');
		});
	});

	describe('multiplying two numbers', () => {
		it('should return the right answer', () => {
			expect(operate('0', '-1', 'x')).toBe('0');
			expect(operate('-1.5', '1', 'x')).toBe('-1.5');
			expect(operate('0', '0', 'x')).toBe('0');
		});
	});

	describe('dividing two numbers', () => {
		it('should return the right answer', () => {
			expect(operate('0', '-1', '÷')).toBe('0');
			expect(operate('-1.5', '1', '÷')).toBe('-1.5');
			expect(() => {
				operate('0', '0', '÷');
			}).toThrow('Cannot divide by 0');
		});
	});

	describe('getting the remainder', () => {
		it('should return the right answer', () => {
			expect(operate('0', '-1', '%')).toBe('0');
			expect(operate('-1.5', '1', '%')).toBe('-0.5');
			expect(() => {
				operate('0', '0', '%');
			}).toThrow('Cannot divide by 0');
		});
	});

	describe('calling with non string type arguments', () => {
		it('should throw an error', () => {
			expect(() => {
				operate(1, 1, '+');
			}).toThrow('Values must be strings');

			expect(() => {
				operate('1', '1', 0);
			}).toThrow('Unknown operation 0');
		});
	});
});
