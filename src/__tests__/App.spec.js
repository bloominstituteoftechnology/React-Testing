import React from "react";
import {shallow} from "enzyme";
import renderer from "react-test-renderer";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it.skip("matches snapshot", () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should render a div with component-app class", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("div.component-app").length).toBe(1);
  });

  it("total should be zero by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe("0");
  });

  it("should contain a Display component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Display").length).toBe(1);
  });

  it("should contain a Panel component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Panel").length).toBe(1);
  });
});
