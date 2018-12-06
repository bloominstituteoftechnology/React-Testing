import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";
import App from "../App";
describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });

  it('renders a div with a different className depending on if it was passed "orange" or "wide" as a prop', () => {
    const cbWrapper = shallow(<Button />);
    const orangeWrapper = shallow(<Button orange />);
    const wideWrapper = shallow(<Button wide />);
    const owWrapper = shallow(<Button orange wide />);

    expect(cbWrapper.find("div").hasClass("component-button")).toBe(true);
    expect(orangeWrapper.find("div").hasClass("orange")).toBe(true);
    expect(wideWrapper.find("div").hasClass("wide")).toBe(true);
    expect(owWrapper.find("div").hasClass("orange wide")).toBe(true);
  });

  it("renders a button that displays the name passed down to it as props", () => {
    const wrapper = shallow(<Button name="Muerte" />);
    const button = wrapper.find("button");
    expect(button.text()).toBe("Muerte");
  });

  it("fires a function when clicked", () => {
    const mock = jest.fn();

    const wrapper = shallow(<Button clickHandler={mock} name="9" />);
    const button = wrapper.find("button");

    button.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
    button.simulate("click");
    expect(mock).toHaveBeenCalledTimes(2);
  });

  // this next test might either be considered out of scope for single-component tests or should go into App tests, but it makes sense to me here
  it("changes App's state when clicked", () => {
    const wrapper = shallow(<App />);
    const app = wrapper.instance();
    const button = wrapper
      .find("Panel")
      .dive()
      .find("Button")
      .at(4) //the 4th index in the array of the found Button components
      .dive()
      .find("button");

    expect(app.state.next).toBe(null);
    button.simulate("click");
    expect(app.state.next).toBe("7");
  });
});
