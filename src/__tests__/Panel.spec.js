import React from "react";
import { shallow } from "enzyme";

import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });

  it("should render a panel", () => {
    const wrapper = shallow(<Panel />);

    expect(wrapper.find("div.component-panel").length).toBe(1);
  });

  it("check if exists", () => {
    const wrapper = shallow(<div className="component-panel" />);

    expect(wrapper.find(".component-panel").exists());
  });
});
