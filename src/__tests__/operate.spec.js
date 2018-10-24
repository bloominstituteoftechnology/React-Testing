import operate from "../logic/operate";

describe("operate", () => {
  it("accepts strings as input", () => {
    expect(operate("555", "343", "+")).toEqual("898");
  });

  it("accepts numbers as input", () => {
    expect(operate(555, 343, "+")).toEqual("898");
  });
});
