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

  it("renders an div with the class component-display", () => {
    const wrapper = shallow(<Display />);

    const elements = wrapper.find("div.component-display");

    expect(elements.length).toBe(1);
  });

  it("should render the value its given", () => {
    const wrapper = shallow(<Display value={"="} />);
    expect(wrapper.contains(<div>=</div>)).toEqual(true);
  });
});
