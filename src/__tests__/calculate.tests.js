import calculate from "../logic/calculate";

describe("calculate", () => {
  it("lets me run this test", () => {
    expect(true).toBe(true);
  });

  it("returns an object", () => {
    expect(typeof calculate({}, "string")).toBe("object");
  });
});
