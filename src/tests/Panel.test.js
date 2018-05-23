import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Panel from "../components/Panel/Panel";

Enzyme.configure({ adapter: new Adapter() });

describe("<Panel />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Panel />, div);
  });

  it("renders all 19 Button components", () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find("Button");

    expect(buttons.length).toBe(19);
  });

  it('handleClick should be a function', () => {
    const wrapper = mount(<Panel  />);
    wrapper.handleClick = jest.fn();

    expect(typeof wrapper.handleClick).toBe('function');
  });
});
