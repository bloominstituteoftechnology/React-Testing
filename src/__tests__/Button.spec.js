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

  it("should render component component-button", () => {
    const component = shallow(<Button />);
    expect(component.find(".component-button").length).toEqual(1);
  });

  it("should render component-button wide when passed wide", () => {
    const component = shallow(<Button wide />);
    expect(component.find(".component-button").length).toEqual(1);
    expect(component.find(".wide").length).toEqual(1);
  });

  it("should have a method called handleClick", () => {
    const component = shallow(<Button />);
    const instance = component.instance();
    expect(instance.handleClick).toBeDefined();
  });
});
