import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Display />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("display props value", () => {
    const wrapper = shallow(<Display value="0" />);

    expect(wrapper.find(".component-display > div").text()).toBe("0");
  });

  it("should render first div with component-display class", () => {
    const wrapper = shallow(<Display />);

    expect(wrapper.find("div.component-display").length).toBe(1);
  });
});
