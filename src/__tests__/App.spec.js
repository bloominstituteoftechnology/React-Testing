import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

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
