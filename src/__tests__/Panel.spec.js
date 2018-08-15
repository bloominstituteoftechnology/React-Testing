import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Panel from "../components/Panel/Panel";

Enzyme.configure({ adapter: new Adapter() });

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });

  it("should have 19 buttons", () => {
    const panel = shallow(<Panel />);
    const buttons = panel.find("Button");

    expect(buttons).toHaveLength(19);
  });

  it("should have a method called handleClick", () => {
    const panel = shallow(<Panel />);
    const instance = panel.instance();

    expect(instance.handleClick).toBeDefined();
  });
});
