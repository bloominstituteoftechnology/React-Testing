import operate from '../logic/operate';

describe('Operate', () => {
	describe('+', () => {
		it('2 + 2 should be 4', () => {
		expect(operate(2,2, '+')).toBe('4');	
		});
	})
	describe('-', () => {
		it('2 - 2 should be 0', () => {
		expect(operate(2,2, '-')).toBe('0');	
		});
	})
	describe('x', () => {
		it('2 x 2 should be 4', () => {
		expect(operate(2,2, 'x')).toBe('4');	
		});
	})
	describe('÷', () => {
		it('2 ÷ 2 should be 4', () => {
		expect(operate(2,2, '÷')).toBe('1');	
		});
	})
	describe('%', () => {
		it('2 % 2 should be 4', () => {
		expect(operate(2,2, '%')).toBe('0');	
		});
	})

})