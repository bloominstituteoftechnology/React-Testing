import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("should render a div with component-app class", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div.component-app").length).toBe(1);
  });
  it("state should be total:0,next:null,operation:null by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe("0");
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });
  it("should pass 0 to Display component at instantiation", () => {
    const wrapper = shallow(<App />);
    const display = wrapper.find("Display");

    expect(display.props()).toEqual({ value: "0" });
  });
});
