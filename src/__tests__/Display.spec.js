import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find("div.component-display");
    expect(elements.length).toBe(1);
  });
});
