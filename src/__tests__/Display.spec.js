import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
// components
import Display from "../components/Display/Display";

describe("<Display />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Display />, div);
    });
  });
  describe("initial prop check", () => {
    it("displays total value from app corectly", () => {
      let value = "100";
      const wrapper = shallow(<Display value={value} />);
      const total = wrapper.find(".component-display");

      expect(total.text()).toEqual("100");
    });
  });
});
