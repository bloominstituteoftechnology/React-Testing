import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });

  it("should render a div with a display", () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find("div.display");
    expect(display.length).toBe(1);
  });

  it("should only accept a string as it's passed-down value", () => {
    const wrapper = shallow(<Display />);
    expect(typeof wrapper.find("div.display").text()).toBe("string");
  });

  it('displays the "value" prop being passed down to it', () => {
    const wrapper = shallow(<Display value="0" />);
    const display = wrapper.find("div.display");

    expect(display.text()).toBe("0");
  });
});

/**
 * 1) has a div with the name 'display'
 * 2) display a prop 'value' from App.js
 * 3)
 */
