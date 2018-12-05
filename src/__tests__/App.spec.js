import React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

describe("<App />", () => {
  it("value state should be 0 by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe("0");
  });
});

describe("<App />", () => {
  it("operation state should be null by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.operation).toBe(null);
  });
});

describe("<App />", () => {
  it("next state should be null by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.next).toBe(null);
  });
});
