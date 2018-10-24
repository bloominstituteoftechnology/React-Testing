import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("renders a Display component", () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find("Display");

    expect(elements.length).toBe(1);
  });

  it("renders a Panel component", () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find("Panel");

    expect(elements.length).toBe(1);
  });

  it("should start with a total of 0", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
  });
});
