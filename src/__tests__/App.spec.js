import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";
import calculate from "../logic/calculate";

jest.mock("../logic/calculate.js");

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  it("should display value of 0, null, null on default", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.total).toEqual("0");
    expect(instance.state.next).toEqual(null);
    expect(instance.state.operation).toEqual(null);
  });
  it("should pass the total to the display component if next is null", () => {
    const root = shallow(<App />);
    const instance = root.instance();

    root.setState({ total: "7", next: null });
    const value = root.find({ value: instance.state.total });

    expect(value.length).toBe(1);
  });
});

describe("handleClick()", () => {
  it("should call 'calculate' exactly one time", () => {
    //to know how many times a function is called
    const root = shallow(<App />);
    const instance = root.instance();
    const buttonName = "logan";
    const stateObject = { total: "3", next: null, operation: null };

    root.setState(stateObject);
    instance.handleClick(buttonName);

    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
  });
  it("should render the Display and Panel components", () => {
    const root = shallow(<App />);
    const display = root.find("Display");
    const panel = root.find("Panel");

    expect(display.length).toBe(1);
    expect(panel.length).toBe(1);
  });
});

/*
-it should render the display and panel components
-should have a default value of 0 for total
-passes 0 to the display component if total and next are null
-handleClick calls calculate exactly one time
*/
