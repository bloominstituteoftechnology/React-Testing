import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should matches snapshot", () => {
    const snapshot = renderer.create(<App />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should have this.state.total to be string 0", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe("0");
  });

  it("should render a div with a component-app class", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("div.component-app").length).toBe(1);
  });
});
