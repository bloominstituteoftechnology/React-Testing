import React from "react";
import { shallow } from "enzyme";

import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });

  it("should have a div named component-panel used to split up the buttons", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find("div.component-panel").length).toBe(1);
  });

  it("the div component-panel split into 5 divs to contain all the buttons", () => {
    const wrapper = shallow(<Panel />);
    const cp = wrapper.find("div.component-panel");
    expect(cp.children().length).toBe(5);
  });

  it("should render 19 <Button/> components", () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find("Button");
    expect(buttons.length).toBe(19);
  });
});

/**
 * 1) it should have a total of 19 buttons
 * 2) component-panel should contain 5 divs which separate the buttons
 * 3) it should contain a div named component-panel to split up the buttons
 */
