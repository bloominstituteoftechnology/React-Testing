import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  const component = shallow(<App />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should set total: '0' when component mounts ", () => {
    const instance = component.instance();
    expect(instance.state.total).toEqual("0");
  });

  it("should setState to appropriate value when button is pushed", () => {
    const instance = component.instance();

    instance.handleClick("AC");
    expect(instance.state.operation).toEqual(null);

    instance.handleClick("7");
    expect(instance.state.next).toEqual("7");

    instance.handleClick(".");
    expect(instance.state.next).toEqual("7.");

    instance.handleClick("2");
    expect(instance.state.next).toEqual("7.2");

    instance.handleClick("+");
    expect(instance.state.total).toEqual("7.2");

    instance.handleClick("2");
    expect(instance.state.next).toEqual("2");

    instance.handleClick("=");
    expect(instance.state.next).toEqual(null);
    expect(instance.state.total).toEqual("9.2");
  });
});
