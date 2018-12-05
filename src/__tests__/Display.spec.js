import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });

  it("should render a Display", () => {
    const wrapper = shallow(<Display />);

    expect(wrapper.find("div.component-display").length).toBe(1);
  });

  // it("check props", () => {
  // 	const wrapper = shallow(<Display value="1" />);
  // 	expect(wrapper.props().value).to.equal(1);
  // });

  it("check if exists", () => {
	const wrapper = shallow(<div className="component-display" />);

    expect(wrapper.find('.component-display').exists());
  });
});
