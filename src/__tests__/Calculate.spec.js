import calculate from "../logic/calculate";
import { isNumber } from "util";

describe("<calculate />", () => {
  it("should say if an input is a number", () => {
    expect(isNumber(3)).toEqual(true);
    expect(isNumber("hi")).toEqual(false);
    expect(isNumber(Infinity)).toEqual(true);
  });

  it("should return return an objects where total, next, and operation are null when `AC` is passed in", () => {
    const obj = { total: 10, next: 1, operation: "+" };
    const button = "AC";

    expect(calculate(obj, button)).toEqual({ total: null, next: null, operation: null });
  });

  it("should return an empty object if the button pressed is 0 or next is 0", () => {
    const button = "0";
    const object = { total: null, next: "0", operation: null };

    expect(calculate(object, button)).toEqual({});
  });

  it("shoud return an object with next + buttonName if both operation and next exist", () => {
    const obj = { total: 1, next: 1, operation: 2 };
    expect(calculate(obj, "2")).toEqual({ next: "12" });
  });

  it("should return 0. if buttonName is a decimal and operation exists", () => {
    expect(calculate({ operation: "1" }, ".")).toEqual({ next: "0." });
  });
});
