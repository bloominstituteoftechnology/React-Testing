import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
});

describe("<Button />", () => {
  it("should render a button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button"));
  });
});

describe("<Button />", () => {
  it("should render set value state to null", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button"));
  });
});
