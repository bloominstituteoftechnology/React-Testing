import calculate from "../logic/calculate";
describe("calculate", () => {
  it("should return a total of 30 if we start with a total for 10 and we give a next of 20 and an operation of +", () => {
    expect(
      calculate(
        {
          total: "10",
          next: "20",
          operation: "+"
        },
        "="
      )
    ).toEqual({
      total: "30",
      next: null,
      operation: null
    });
  });

  it("should return a total of -10 if start with a total of 10 and we give a next of 20 and an operation of -", () => {
    expect(
      calculate(
        {
          total: "10",
          next: "20",
          operation: "-"
        },
        "="
      )
    ).toEqual({
      total: "-10",
      next: null,
      operation: null
    });
  });
});
