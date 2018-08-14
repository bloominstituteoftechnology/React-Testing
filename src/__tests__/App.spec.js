import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
 
  it("renders without crashing", () => {
    shallow(<App />);
  });

  describe("checks default state for <App />", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    it("should have total as 0 by default in state", () => {
      expect(instance.state.total).toMatch("0");
    });
    it("should have next as null by default in state", () => {
      expect(instance.state.next).toBe(null);
    });
    it("should have operation as null by default in state", () => {
      expect(instance.state.operation).toBe(null);
    });
  });

});
