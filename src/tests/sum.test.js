const sum = require('../logic/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('null', () => {
    const n = null;
    expect(sum(1, 2)).toBeTruthy();
})
