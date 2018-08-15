import operate from "../logic/operate";

describe("operate function", () => {
  it("returns a string", () => {
    const result = operate(1, 2, "+");
    expect(typeof result).toEqual("string");
  });

  it('accepts a string or number as input', () => {
    const result = operate(1, 2, "+");
    expect(result).toEqual('3')  
  })
});
