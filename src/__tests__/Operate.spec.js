import calculate from "../logic/calculate";
import { isNumber } from "util";
import Big from "big.js";
import operate from "../logic/operate";

describe("operate", () => {
  it("should perform operations", () => {
    expect(operate(1, 2, "+")).toEqual("3");
    expect(operate(3, 4, "-")).toEqual("-1");
  });
  it("should throw an error when not one of the operations", () => {
    expect(() => operate(1, 2, ")")).toThrow();
  });
});
