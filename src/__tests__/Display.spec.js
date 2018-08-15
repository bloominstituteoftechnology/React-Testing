import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });

  it("should render the component component-display", () => {
    const display = shallow(<Display />);
    expect(display.find(".component-display").length).toEqual(1);
  });

  it("should render the value prop", () => {
    const display = shallow(<Display value={"15"} />);
    const value = display.find(".component-display");
    expect(value.text()).toEqual("15");
  });
});
