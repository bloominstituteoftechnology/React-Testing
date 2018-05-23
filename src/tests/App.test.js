import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import { notDeepEqual } from "assert";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should set total: 0, next: null, operation: null", () => {
    const total = instance.state.total;
    const next = instance.state.next;
    const operation = instance.state.operation;

    expect(total).toEqual("0");
    expect(next).toEqual(null);
    expect(operation).toEqual(null);
  });

  it("should update state when a button is clicked", () => {
    const previousState = instance.state;

    instance.handleClick("5");

    expect(previousState).not.toEqual(instance.state);
  });
});
