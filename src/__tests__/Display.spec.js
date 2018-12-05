import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
  it("should render a div with component-display class", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div.component-display").length).toBe(1);
  });
  it("should have undefined as default props", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.props().value).toEqual(undefined);
  });
  it("should check if className component-display exists", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find(".component-display").exists()).toEqual(true);
  });
});
