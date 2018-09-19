import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("renders inner button text", () => {
    const wrapper = shallow(<Button name="3" orange />);
    expect(wrapper.find("button").text()).toEqual("3");
  });

  it("corrent classname orange", () => {
    const wrapper = shallow(<Button name="3" orange />);
    expect(wrapper.find("div").hasClass("orange")).toEqual(true);
  });

  it("corrent classname wide", () => {
    const wrapper = shallow(<Button name="3" wide />);
    expect(wrapper.find("div").hasClass("wide")).toEqual(true);
  });

  it("onClick", () => {
    const mock = jest.fn();

    const wrapper = shallow(
      <Button
        name="3"
        clickHandler={mock}
      />
    );
    wrapper.find('button').simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it('onClick value test', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button name="3" clickHandler={mock} />);
    wrapper.find('button').simulate('click');
    expect(mock).toHaveBeenCalledWith('3');
  });
});
