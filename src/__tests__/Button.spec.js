import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
  it("should render a div with component-button class", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("div.component-button").length).toBe(1);
  });
  it("should check if className component-button exists", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find(".component-button").exists()).toEqual(true);
  });
  it("should run mockFunc once when button clicked", () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Button name="7" clickHandler={mockFunc} />);

    wrapper.find("button").simulate("click");
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
