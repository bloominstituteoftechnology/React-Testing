import React from "react";
import { shallow } from "enzyme";

import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });
});

describe("<Panel />", () => {
  it("should render a div with the className of component-panel", () => {
    const wrapper = shallow(<Panel />);

    expect(wrapper.find("div.component-panel"));
  });
});
