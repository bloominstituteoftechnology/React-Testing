import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import calculate from '../logic/calculate';

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../logic/calculate");
calculate.mockImplementation((state, button) => {
  const { total, next } = state;
  return { total: String(Number(total) + 1), next: next, operation: button };
});

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should display value of 0 on default", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.total).toEqual("0");
  });

  it("should display null on default", () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(instance.state.next).toEqual(null);
  });

  it("should have the properties `total`, `next`, and `operation` in state", () => {
    const component = shallow(<App />);
    expect(component.state("total")).toEqual("0");
    expect(component.state("next")).toBeDefined();
    expect(component.state("operation")).toBeDefined();
  });

  it("should render a div with class `component-app`", () => {
    const component = shallow(<App />);
    expect(component.find(".component-app")).toHaveLength(1);
  });

  it("should render a div with class `component-app`", () => {
    const component = shallow(<App />);
    expect(component.find(".component-app")).toHaveLength(1);
  });

  it('processes clickHandlers appropriately', () => {
    const buttonName = '+';
    const inputState = {total:'1', next:'1', operation: '-'}
    const returnVal = {total: '2', next: '1', operation: '+'}
    const app = shallow(<App />);
    const {clickHandler} = app.find('Panel').props();
    app.setState(inputState);
    clickHandler(buttonName);
    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(inputState, buttonName);
    expect(app.state()).toEqual(returnVal)
  })
});
