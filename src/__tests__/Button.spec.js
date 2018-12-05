import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Button />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should display props name", () => {
    const wrapper = shallow(<Button name="test" />);

    expect(wrapper.find("div button").text()).toBe("test");
  });

  it("renders a button", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find("button").length).toBe(1);
  });
});
