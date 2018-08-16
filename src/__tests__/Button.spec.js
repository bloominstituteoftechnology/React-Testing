import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
  describe("should have the right class names in the <Button /> when the right props are passed in", () => {
    it("has the component-button class by default", () => {
      const button = shallow(<Button />);
      expect(button.hasClass("component-button")).toBeTruthy();
    });
    it("has the component-button class and orange class in Button", () => {
      const button = shallow(<Button orange />);
      expect(button.hasClass("component-button")).toBeTruthy();
      expect(button.hasClass("orange")).toBeTruthy();
    });

    it("has the component-button class and wide class in Button", () => {
      const button = shallow(<Button wide />);
      expect(button.hasClass("component-button")).toBeTruthy();
      expect(button.hasClass("wide")).toBeTruthy();
    });
    it("has the component-button class, orange, and wide class in Button", () => {
      const button = shallow(<Button wide orange />);
      expect(button.hasClass("component-button")).toBeTruthy();
      expect(button.hasClass("wide")).toBeTruthy();
      expect(button.hasClass("orange")).toBeTruthy();
    });
  });
});
