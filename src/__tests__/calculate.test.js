import calculate from '../logic/calculate';

// Errors
import {
	nonObjectTypeError,
	nonStringTypeError,
} from '../errors/index.js';

describe('calculate.js', () => {
	describe('calling with non object type as first argument', () => {
		it('should throw an error', () => {
			expect(() => { calculate(1, '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate(NaN, '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate('', '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate(false, '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate([], '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate(() => {}, '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate(null, '0'); }).toThrow(nonObjectTypeError);
			expect(() => { calculate(undefined, '0'); }).toThrow(nonObjectTypeError);
		});
	});

	describe('calling with non string type as second argument', () => {
		it('should throw an error', () => {
			expect(() => { calculate({}, 1); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, NaN); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, false); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, []); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, {}); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, () => {}); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, null); }).toThrow(nonStringTypeError);
			expect(() => { calculate({}, undefined); }).toThrow(nonStringTypeError);
		});
	});
});
