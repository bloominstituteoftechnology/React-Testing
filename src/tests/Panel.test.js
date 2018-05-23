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
  it("should have a div with class component-panel", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(".component-panel")).toHaveLength(1);
  });
  it("main div should have 5 children divs", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(".component-panel").children("div")).toHaveLength(5);
  });
  it("panel should display 19 buttons", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find("Button")).toHaveLength(19);
  });
  it("should pass click handler and execute it", () => {
    window.alert = jest.fn();

    const wrapper = mount(<Panel clickHandler={window.alert} />);

    wrapper.find(`[name="AC"] button`).simulate("click");

    expect(window.alert.mock.calls.length).toBe(1);
  });
});
