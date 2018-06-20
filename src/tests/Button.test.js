import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button name="0" />);
  });

  it("should render one div", () => {
    const button = shallow(<Button name="0" />);
    const divs = button.find("div");
    expect(divs.length).toEqual(1);
  });

  it("should respond correctly to button presses", () => {
    const mySpy = jest.fn(() => {});
    const button = shallow(<Button clickHandler={mySpy} />);
    const instance = button.instance();
    instance.handleClick();
    expect(mySpy).toHaveBeenCalledTimes(1);
    instance.handleClick();
    expect(mySpy).toHaveBeenCalledTimes(2);
  });
});
