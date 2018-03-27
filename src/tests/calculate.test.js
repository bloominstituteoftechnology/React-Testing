import calculate from '../logic/calculate.js';

describe('calculate.js', () => {
	describe('`Calculate`', () => {
  it('ButtonName = AC returns {null stuff}', () => {
  expect(calculate({},'AC')).toEqual({total: null, next: null, operation: null})
  });
  it('buttonName is a Number and !0', () => {
  expect(calculate({},'2')).toEqual({
            next: '2',
            total: null,
        })
  });
  it('button is =', () => {
  expect(calculate({total: null, next: null, operation: null}, '=')).toEqual({})
  });
	})
});