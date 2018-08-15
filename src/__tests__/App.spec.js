import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import calculate from "../logic/calculate";

Enzyme.configure({ adapter: new Adapter() });
jest.mock("../logic/calculate.js");

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should have the default properties total, next, and operation in its state", () => {
    const app = shallow(<App />);
    expect(app.state("total")).toEqual("0");
    expect(app.state("next")).toEqual(null);
    expect(app.state("operation")).toEqual(null);
  });

  it("should render `component-app`", () => {
    const app = shallow(<App />);
    expect(app.find(".component-app").length).toEqual(1);
  });

  it("should call calculate exactly one time", () => {
    // to know how many times a function is called.
    const root = shallow(<App />);
    const instance = root.instance();

    instance.handleClick();
    expect(calculate).toHaveBeenCalledTimes(1);
  });

  it("should call calculate passing the state and buttonName", () => {
    // to know how many times a function is called.
    const root = shallow(<App />);
    const instance = root.instance();
    const buttonName = "";
    const stateObject = { total: "3", next: null, operation: null };

    root.setState(stateObject);
    instance.handleClick(buttonName);
    expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
  });

  it("should pass the total to the display component if next is null", () => {
    const root = shallow(<App />);
    const instance = root.instance();

    root.setState({ total: "7", next: null });
    const value = root.find({ value: instance.state.total });
    expect(value).toHaveLength(1);
  });

  it("should render the Display and Panel components", () => {
    const root = shallow(<App />);
    const display = root.find("Display");
    const panel = root.find("Panel");

    expect(display.length).toBe(1);
    expect(panel.length).toBe(1);
  });
});
