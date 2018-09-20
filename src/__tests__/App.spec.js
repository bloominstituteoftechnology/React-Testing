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

  it("count inner elements", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").children()).toHaveLength(2);
  });

  it("checks the set state of the App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toBe("0");
    expect(wrapper.state().next).toBeNull();
    expect(wrapper.state().operation).toBeNull();
  });

  it("checks Display for props", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Display").prop("value")).toBe("0");
  });

  it("checks Panel for props", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Panel").prop("clickHandler")).toBeInstanceOf(Function);
  });
});
