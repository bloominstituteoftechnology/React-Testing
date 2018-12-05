import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });

  it("matches snapshot", () => {
    const snapshot = renderer.create(<Button />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should assign the right style to the button", () => {
    const wrapper = shallow(<Button />);
    const instance = wrapper.instance();

    const button = wrapper.find(".component-button");
  });
});
