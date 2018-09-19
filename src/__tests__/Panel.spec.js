import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
// components
import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Panel />, div);
    });
  });
  describe("prop check", () => {
    it("should render all 19 calc button", () => {
      const wrapper = shallow(<Panel />);
      const elements = wrapper.find("Button");

      expect(elements.length).toEqual(19);
    });
  });
});
