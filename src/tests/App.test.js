import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  it("should contain a wrapping div with a classname component-display", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("component-app")
    ).toEqual(true);
  });
  it("should have 2 children siblings", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").children()).toHaveLength(2);
  });
  it("should have a beginning state of total: 0, next: null, and operation: null", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toEqual("0");
    expect(wrapper.state().next).toEqual(null);
    expect(wrapper.state().operation).toEqual(null);
  });
  it("should have a clickhandler that changes the state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick("3");
    expect(wrapper.state().next).toEqual("3");
  });
});
