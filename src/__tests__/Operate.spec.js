// import React from "react";
// import ReactDom from "react-dom";
// import Big from "big.js";
// import Enzyme, { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

import operate from "../logic/operate";

// jest.mock("../logic/operate.js");

// Enzyme.configure({ adapter: new Adapter() });

describe("operate", () => {
  it("should return a string", () => {
    const result = operate(1, 2, "+");
    expect(typeof result).toEqual("string");
  });
  it("throws an error on default", () => {
    const operation = "?";
    expect(() => {
      operate(1, 2, operation).toThrowError(`Unknown operation ${operation}`);
    });
  });
});
