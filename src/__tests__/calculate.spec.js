import calculate from "../logic/calculate";
import { isNumber } from "util";

describe("calculate function", () => {
  const nullState = {
    total: null,
    next: null,
    operation: null
  };

  it("should return a corresponding number string if isNumber button name is 0-9", () => {
    const number = calculate(nullState, "3");
    expect(number.next).toEqual("3");
  });

  it("should return null state when AC button is clicked", () => {
    const inputState = {
      total: "154",
      next: "90",
      operation: "+"
    };
    const buttonName = "AC";
    const result = calculate(inputState, buttonName);
    expect(result).toEqual(nullState);
  });

  it("should return null state if button name and next equal zero", () => {
    const inputState = {
      total: "154",
      next: "0",
      operation: "+"
    };
    const buttonName = "0";
    const result = calculate(inputState, buttonName);
    expect(result).toEqual(nullState);
  });

  it('should show the total when the equal sign is pressed', () =>{
    const inputState = {
        total: "10",
        next: "5",
        operation: "+"
      }; 
      const buttonName = '='
      const result = calculate(inputState, buttonName)
      expect(result.total).toEqual('15')
  });

  it('should change the operation to be an operator(+,-,*,/) when the operator is called', () =>{
    const inputState = {
        total: "10",
        next: "5",
        operation: null
      }; 
      const buttonName = '*'
      const result = calculate(inputState, buttonName)
      expect(result.operation).toEqual('*')
  });

  it('should add decimal point to object.next when the period is pressed', () =>{
    const inputState = {
        total: "10",
        next: "5",
        operation: null
      }; 
      const buttonName = '.'
      const result = calculate(inputState, buttonName)
      expect(result.next).toEqual('5.')
  });

});
