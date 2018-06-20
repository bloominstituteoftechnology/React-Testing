import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should render exactly one display element", () => {
    const app = shallow(<App />);

    const displays = app.find("Display");

    expect(displays.length).toEqual(1);
  });

  it("should render exactly one panel element", () => {
    const app = shallow(<App />);

    const panels = app.find("Panel");

    expect(panels.length).toEqual(1);
  });

  it("should have the correct default state", () => {
    const app = shallow(<App />);
    const expectedState = {
      total: "0",
      next: null,
      operation: null
    };
    expect(app.instance().state).toEqual(expectedState);
  });

  it("should respond correctly to button presses", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    instance.handleClick("6");
    expect(app.instance().state).toEqual({
      total: null,
      next: "6",
      operation: null
    });
    instance.handleClick("x");
    expect(app.instance().state).toEqual({
      total: "6",
      next: null,
      operation: "x"
    });
    instance.handleClick("7");
    expect(app.instance().state).toEqual({
      total: "6",
      next: "7",
      operation: "x"
    });
    instance.handleClick("=");
    expect(app.instance().state).toEqual({
      total: "42",
      next: null,
      operation: null
    });
  });
});
