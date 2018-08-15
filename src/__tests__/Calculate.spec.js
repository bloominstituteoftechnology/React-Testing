import calculate from "../logic/calculate";
import { isNumber } from "util";

describe("calculate", () => {
  it("should return a num if isNumber button name is 0-9", () => {
    const number = calculate(isNumber, "3");
    expect(number.next).toEqual("3");
  });
  it("should return default state if button is AC", () => {
    const nullState = {
      total: null,
      next: null,
      operation: null
    };
    const inputState = {
      total: "100",
      next: "123",
      operation: "+"
    };
    const buttonName = "AC";
    const result = calculate(inputState, buttonName);
    expect(result).toEqual(nullState);
  });
  it("should return return total when = is input", () => {
    const inputState = {
      total: "10",
      next: "5",
      operation: "+"
    };
    const result = calculate(inputState, "=");
    expect(result.total).toEqual("15");
  });
  it("should show operator when operator is pressed", () => {
    const inputState = {
      total: "10",
      next: "5",
      operation: null
    };
    const result = calculate(inputState, "*");
    expect(result.operation).toEqual("*");
  });
  it("should show total decimal is pressed", () => {
    const inputState = {
      total: null,
      next: "5",
      operation: null
    };
    const result = calculate(inputState, ".");
    expect(result.next).toEqual("5.");
  });
});
