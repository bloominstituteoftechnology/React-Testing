import React from 'react';
import sinon from 'sinon';
import Operate from '../logic/operate.js';

describe('operate', () => {
  it("'+' should add two values together", () => {
    const operateTest = Operate(2, 3, '+');
    expect(operateTest).toBe('5');
  });
  it("'-' should subtract one value from another", () => {
    const operateTest = Operate(2, 3, '-');
    expect(operateTest).toBe('-1');
  });
  it("'x' should multiply two values", () => {
    const operateTest = Operate(2, 3, 'x');
    expect(operateTest).toBe('6');
  });
  it("'÷' should divide one value from another", () => {
    const operateTest = Operate(4, 2, '÷');
    expect(operateTest).toBe('2');
  });
  it("'%' should return the modulo of two values", () => {
    const operateTest = Operate(4, 2, '%');
    expect(operateTest).toBe('0');
  });
  it("'asdf' should return an error", () => {
    const operation = 'undefinedOperation';
    expect(() => {
      Operate(4, 2, 'undefinedOperation');
    }).toThrowError(`Unknown operation ${operation}`);
  });
});
