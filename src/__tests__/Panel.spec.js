import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Panel from "../components/Panel/Panel";

Enzyme.configure({ adapter: new Adapter() });

describe("<Panel />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Panel />, div);
  });
  it("should render buttons to the screen", () => {
    const buttons = shallow(<Panel />);
    const test = buttons.find("Button");
    expect(test).toHaveLength(19);
  });
  it("should have a function called handleClick", () => {
    const testing = shallow(<Panel />);
    const instance = testing.instance();
    expect(instance.handleClick).toBeDefined();
  });
});
