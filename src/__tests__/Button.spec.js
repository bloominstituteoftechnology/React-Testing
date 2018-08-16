import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("should join and trim all class names provided", () => {
    const button = shallow(<Button wide orange />);
    expect(button.props().className).toEqual("component-button orange wide");
  });

  it("should return a button", () => {
    const returnButton = shallow(<Button />);
    expect(returnButton.find("button")).toHaveLength(1);
  });

  it("button should have text matching the passed in name", () => {
    const returnButton = shallow(<Button name="tests pass" />);
    expect(returnButton.text()).toEqual("tests pass");
  });

  it("button should have the class name orange if the prop orange is passed", () => {
    const button = shallow(<Button orange />);
    expect(button.props().className).toEqual("component-button orange");
  });

  it("button should have the class name wide if the wide prop is passed", () => {
    const button = shallow(<Button wide />);
    expect(button.props().className).toEqual("component-button  wide");
  });
});

// should join and trim all class names provided
// should return a button
// button should have text matching the passed in name
// button should have the class name orange if the prop orange is passed
// button should have the class name wide if the wide prop is passed
