import operate from "../logic/operate";

describe("operate", () => {
  it("handles math operations", () => {
    expect(operate(1, 1, "+")).toEqual("2");
    expect(operate(1, 1, "-")).toEqual("0");
    expect(operate(1, 1, "x")).toEqual("1");
    expect(operate(1, 1, "÷")).toEqual("1");
    expect(operate(1, 1, "%")).toEqual("0");
  });
});
