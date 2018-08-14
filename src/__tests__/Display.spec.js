import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });

  it("should print the value prop to the screen", () => {
    const display = shallow(<Display />);
    const componentDisplay = display.find(".component-display");
    expect(componentDisplay.text()).toEqual("0");
  });
});
