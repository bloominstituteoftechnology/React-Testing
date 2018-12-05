import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
});

describe("<Display />", () => {
  it("should be a div with the className of component-display", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div.component-display"));
  });
});
