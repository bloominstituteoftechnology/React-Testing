import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "+",
    "-",
    "x",
    "÷",
    ".",
    "=",

    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "hipp"
  ];
  buttons.forEach(button => {
    it("should display button's name", () => {
      const name = button;
      const wrapper = shallow(<Button name={name} />);

      expect(wrapper.contains(name)).toBeTruthy();
    });
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });
  it("should display a button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button")).toHaveLength(1);
  });
  it("passes down clickhandler and executes it", () => {
    window.alert = jest.fn();

    const wrapper = shallow(<Button clickHandler={window.alert} />);

    wrapper.find("button").simulate("click");
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
  it("should have orange button", () => {
    const props = "orange";
    const wrapper = shallow(<Button orange />);

    expect(wrapper.find(".orange")).toHaveLength(1);
  });
  it("should have wide button", () => {
    const props = "orange";
    const wrapper = shallow(<Button wide />);

    expect(wrapper.find(".wide")).toHaveLength(1);
  });
});
