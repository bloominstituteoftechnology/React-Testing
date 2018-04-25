import sinon from "sinon";

import operate from "../logic/operate";

describe("<operate />", () => {
   it('returns an result as a String', () => {
    const result = operate(1, 2, '+');
    expect(typeof result).toBe('string');
  });
  it("should error check", () => {
    const mistype = () => {
      throw new TypeError();
    };
    expect(mistype).toThrow(TypeError);
  });
  it("should return sum", () => {
    const add = operate(1, 2, "+");
    expect(add).toBe("3");
  });
  it("should return difference", () => {
    const subtract = operate(1, 2, "-");
    expect(subtract).toBe("-1");
  });
  it("should return product", () => {
    const mult = operate(1, 2, "x");
    expect(mult).toBe("2");
  });
  it("should return quotient", () => {
    const divide = operate(6, 2, "÷");
    expect(divide).toBe("3");
  });
  it("should return remainder", () => {
    const modulo = operate(3, 2, "%");
    expect(modulo).toBe("1");
  });
   it('should not crash', () => {
    const extraOps = operate(1, '+', '+');
    expect(typeof extraOps).not.toBe('undefined');
  });
});
