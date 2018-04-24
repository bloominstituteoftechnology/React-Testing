import calculate from "../logic/calculate";

describe("calculate", () => {
  it("should reset the calc when AC is sent", () => {
    const input = { total: "57", next: "23", operation: "X" };
    const result = calculate(input, "AC");
    expect(result).toEqual({ total: "0", next: null, operation: null });
  });
  it("should calculate the total when = is sent", () => {
    const input = { total: "15", next: "23", operation: "x" };
    const result = calculate(input, "=");
  });
});
