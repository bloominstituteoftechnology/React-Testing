import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import calculate from "../logic/calculate.js";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("renders component div properly", () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find(".component-app");

    expect(elements.length).toBe(1);
  });

  it("display total should be 0 by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
  });

  // it("handleClick function should call calculate when button is clicked", () => {
  //   const wrapper = shallow(<App />);
  //   const instance = wrapper.instance();
  //   const stateObj = { total: "3" };
  //   instance.setState(stateObj);
  //   instance.handleClick("+");

  //   expect(calculate).toHaveBeenCalledWith(instance.state, "+");
  // });
});
