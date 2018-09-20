import React from "react";
import { shallow } from "enzyme";

import calculate from "../logic/calculate";

import App from "../App";

jest.mock("../logic/calculate");

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should show 0 by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe("0");
    expect(instance.state.next).toBeNull();
    expect(instance.state.operation).toBeNull();
  });

  it("should pass the total to <Display /> if next is null", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    wrapper.setState({ next: null, total: "7" });

    const elements = wrapper.find({ value: instance.state.total });
    expect(elements.length).toBe(1);
  });

  it("should pass '0' to <Display /> if next and total are null", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ next: null, total: null });

    const elements = wrapper.find({ value: "0" });
    expect(elements.length).toBe(1);
  });

  it("handleClick should call calculate once passing state and button name", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const stateObject = { total: "3" };
    instance.setState(stateObject);
    instance.handleClick("add");

    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(instance.state, "add");

    instance.handleClick("total");
    expect(calculate).toHaveBeenCalledWith(instance.state, "total");
  });
});
