import operate from "../logic/operate";

describe("", () => {
  it("", () => {
    expect(true).toBeTruthy();
  });
});

describe("operate", () => {
  it("when passed two numbers and the + operation, returns a string of those two numbers added together", () => {
    expect(operate(1, 2, "+")).toBe("3");
  });

  it("when passed numbers and -, returns the difference between the numbers", () => {
    expect(operate(1, 2, "-")).toBe("-1");
  });

  it("when passed numbers and x, returns the product of those numbers", () => {
    expect(operate(1, 2, "x")).toBe("2");
  });

  it("when passed numbers and ÷, returns the first number divided by the other", () => {
    expect(operate(1, 2, "÷")).toBe("0.5");
  });

  it("when passed numbers and %, returns the modulo of those numbers", () => {
    expect(operate(1, 2, "%")).toBe("1");
  });

  it("returns an error warning of an unknown operation by default if no other cases pass", () => {
    expect(() => operate(1, 2, "+/-")).toThrowError("Unknown operation +/-");
  });
});
