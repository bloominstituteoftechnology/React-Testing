import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import calculate from "../logic/calculate";

Enzyme.configure({ adapter: new Adapter() });

describe("<calculate />", () => {
  describe("`isNumber`", () => {
    const isNumber = calculate.isNumber;
    it("should return whether its a number or not", () => {
      expect(isNumber, "function");
    });
    it("should return the right boolean", () => {
      const isNumber = calculate.isNumber;
      expect(isNumber, true, "boolean");
    });
  });
  describe("`calculate`", () => {
    it("should clear the display", () => {
      const AC = calculate(
        { total: "4534634653452", next: null, operation: null },
        "AC"
      );
      expect(AC).toEqual({ total: null, next: null, operation: null });
    });
    it("should return a new total", () => {
      const total = calculate({ total: "1", next: "8", operation: "+" }, "=");
      expect(total).toEqual({ total: "9", next: null, operation: null });
    });
    it("should return undefined for all values", () => {
      const result = calculate({ next: "0" }, "0");
      expect(result.total).toBe(undefined);
      expect(result.next).toBe(undefined);
      expect(result.operation).toBe(undefined);
    });
    it("should return an empty object", () => {
      const input = calculate({ total: null, next: "0", operation: "+" }, "0");
      expect(input).toEqual({});
    });
    it("should reverse the positive/negative value", () => {
      const reverse = calculate(
        { total: null, next: "-38", operation: null },
        "+/-"
      );
      expect(reverse).toEqual({ next: "38" });
    });
    it("should return total with a decimal point", () => {
      const decimal = calculate(
        { total: "9", next: null, operation: null },
        "."
      );
      expect(decimal).toEqual({ total: "9." });
    });
  });
});
