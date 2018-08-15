import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });
  it("should return true if 'component-display' exists", () => {
    const display = shallow(<Display div />);
    const name = display.find(".component-display");
    expect(name.hasClass("component-display")).toEqual(true);
  });
  it("should display a value passed in as a prop", () => {
    const display = shallow(<Display value="anything" />);
    const passValue = display.find(".component-display");
    expect(passValue.text()).toEqual("anything");
  });
  it("should return wether current node is empty, uses .isEmpty or .exists", () => {
    const display = shallow(<Display value={undefined} />);
    expect(display.exists("value")).toEqual(false);
    expect(display.find(".component-display").exists()).toEqual(true);
  });
});

/*
assumptions
-should display an empty string when  no value is provided
-should display the provided value 
*/
