import React from "react";
import { shallow } from "enzyme";
import "../testsetup";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const comp = shallow(<App />);
    expect(comp).toMatchSnapshot();
  });

  describe("State Tests", () => {
    it("should have the variable 'total' defined and initially set to zero in state", () => {
      const comp = shallow(<App />);
      expect(comp.state("total")).toEqual("0");
    });

    it("should have the variables 'operation' and 'next' defined in state", () => {
      const comp = shallow(<App />);
      expect(comp.state("next")).toBeDefined();
      expect(comp.state("operation")).toBeDefined();
    });
  });
});
