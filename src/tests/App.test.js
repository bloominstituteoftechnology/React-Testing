import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
  it("should containt two elements inside a div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").children()).toHaveLength(2);
  });
  it("should render a `Display` component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Display")).toHaveLength(1);
  });
  it("should render a `Panel` component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Panel")).toHaveLength(1);
  });
  it("should have a state upon mounting", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state("total")).toBeDefined();
    expect(wrapper.state("next")).toBeDefined();
    expect(wrapper.state("operation")).toBeDefined();
  });
  it("should do a proper calculations and upate state properly", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.handleClick("1");
    expect(wrapper.state("next")).toEqual("1");
    expect(wrapper.state("total")).toBeNull();
    expect(wrapper.state("operation")).toBeNull();
    instance.handleClick("+");
    expect(wrapper.state("next")).toBeNull();
    expect(wrapper.state("operation")).toBe("+");
    expect(wrapper.state("total")).toBe("1");
    instance.handleClick("2");
    expect(wrapper.state("next")).toBe("2");
    expect(wrapper.state("operation")).toBe("+");
    expect(wrapper.state("total")).toBe("1");
    instance.handleClick("=");
    expect(wrapper.state("next")).toBeNull();
    expect(wrapper.state("operation")).toBeNull();
    expect(wrapper.state("total")).toBe("3");
  });
});
