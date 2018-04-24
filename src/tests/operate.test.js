import operate from "../logic/operate";

describe("operate function", () => {
  it("adds two numbers together when given the + operator", () => {
    const result = operate(4, 5, "+");
    expect(result).toEqual("9");
  });
  it("multiplies two numbers together when given the x operator", () => {
    const result = operate(4, 5, "x");
    expect(result).toEqual("20");
  });
  it("divides two numbers when given the ÷ operator", () => {
    const result = operate(20, 5, "÷");
    expect(result).toEqual("4");
  });
  it("subtracts two numbers when given the - operator", () => {
    const result = operate(20, 5, "-");
    expect(result).toEqual("15");
  });
  it("returns the remainder of the first number divided by the second number", () => {
    const result = operate(20, 8, "%");
    expect(result).toEqual("4");
  });
});
