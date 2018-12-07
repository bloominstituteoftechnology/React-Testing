import calculate from "../logic/calculate";
import operate from "../logic/operate";

describe("calculate", () => {
  it("lets me run this test", () => {
    expect(true).toBe(true);
  });

  it("returns the new state object with null as all values when the passed buttonName is AC", () => {
    expect(calculate({}, "AC")).toEqual({
      total: null,
      next: null,
      operation: null
    });
  });

  describe("if the buttonName being passed is a number", () => {
    it("when passed a buttonName which is '0' and obj.next is also '0', returns an empty object", () => {
      expect(calculate({ next: "0" }, "0")).toEqual({});
    });

    it("when buttonName is a non-zero number and obj.operaiton exists, returns a new next value depending on if obj.next already exists", () => {
      expect(calculate({ operation: "exists", next: "exists" }, "1")).toEqual({
        next: "exists1"
      });
    });

    it("when buttonName is a non-zero number and obj.operation does not exist but obj.next does, returns the new object with total as null and next as current next + buttonName", () => {
      expect(calculate({ next: "exists" }, "1")).toEqual({
        total: null,
        next: "exists1"
      });
    });

    it("when buttonName is a non-zero number and both obj.operation and obj.next do not exist, returns an object with total as null and next as the passed buttonName", () => {
      expect(calculate({}, "1")).toEqual({ total: null, next: "1" });
    });
  });

  describe('if buttonName is "."', () => {
    it('when obj.next exists, returns either an empty object or next as the current next value + "." depending on if the current next includes "."', () => {
      expect(calculate({ next: "2" }, ".")).toEqual({ next: "2." });
      expect(calculate({ next: "2." }, ".")).toEqual({});
    });

    it('when obj.next does not exist but obj.operation does, returns next as "0."', () => {
      expect(calculate({ operation: "+" }, ".")).toEqual({ next: "0." });
    });

    it('when obj.next and .operation do not exist but .total does, returns either an empty object or total as the current total + "." depending on if the current total includes "."', () => {
      expect(calculate({ total: "1" }, ".")).toEqual({ total: "1." });
      expect(calculate({ total: "1." }, ".")).toEqual({});
    });

    it('returns an object with total as "0" if none of obj.next, .operation, or .total exist', () => {
      expect(calculate({}, ".")).toEqual({ total: "0." });
    });
  });

  describe('if buttonName is "="', () => {
    it("returns next and operation as null but total as the result of operate(.total, .next, .operation) if both .next and .operation exist, else returns empty object", () => {
      expect(calculate({ next: "1", operation: "+", total: "0" }, "=")).toEqual(
        {
          total: "1",
          next: null,
          operation: null
        }
      );
      expect(calculate({}, "=")).toEqual({});
    });
  });

  describe('if buttonName is "+/-', () => {
    it("returns next as a negative version of the parsed .next if .next exists", () => {
      expect(calculate({ next: "3" }, "+/-")).toEqual({ next: "-3" });
    });

    it("returns total as a negative version of the parsed .next if total exists but next is not truthy(0)", () => {
      expect(calculate({ total: "2" }, "+/-")).toEqual({
        total: "-2"
      });
    });
  });

  describe('buttonName is neither "AC", a number, "=", ".", or "+/-" but obj.operation exists', () => {
    it("returns next as null, operation as the buttonName, and total as .total, .operate, and .next being passed through operate()", () => {
      expect(calculate({ total: "2", next: "4", operation: "x" }, "x")).toEqual(
        { next: null, operation: "x", total: "8" }
      );
    });
  });

  describe('buttonName is neither "AC", a number, "=", ".", or "+/-", .operation does not exist, and neither does .next', () => {
    it("returns operations as the passed buttonName", () => {
      expect(calculate({}, "x")).toEqual({ operation: "x" });
    });
  });

  describe('buttonName is neither "AC", a number, "=", ".", or "+/-", .operation does not exist but .next does', () => {
    it("returns next as null, operation as the passed buttonName, and total as the passed .next", () => {
      expect(calculate({ next: "2" }, "x")).toEqual({
        next: null,
        total: "2",
        operation: "x"
      });
    });
  });
});
