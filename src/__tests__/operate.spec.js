import operate from "../logic/operate";

describe("operate function", () => {
 
  it("returns a string", () => {
    const result = operate(199, 20, "+");
    expect(typeof result).toEqual("string");
  });

  it('throws an error on a wrong operation', () => {
    const operation = ")"
      expect(() => {
          operate(2, 4, operation)
      }).toThrowError(`Unknown operation ${operation}`);
  });
  
  it('accepts either strings or numbers as input', () => {
    const answer = operate('42', 15, '%');
    expect(answer).toEqual('12');
  });
});
