import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });
  it("has one child div", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div").children("div")).toHaveLength(1);
  });
  it("should contain a wrapping div with a classname component-display", () => {
    const wrapper = shallow(<Display />);
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("component-display")
    ).toEqual(true);
  });
  it("should display the value fed to it", () => {
    const wrapper = shallow(<Display value="25" />);
    expect(wrapper.contains(<div>25</div>)).toEqual(true);
  });
});
