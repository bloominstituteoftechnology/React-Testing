import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });

  it("check display component is displayed", () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find("div.component-display");
    expect(elements.length).toBe(1);
  });

  it("check if value props is displayed", () => {
    const wrapper = mount(<Display value="10" />);
    expect(wrapper.props().value).toBeDefined();
    expect(wrapper.props().value).toBe("10");
  });
});
