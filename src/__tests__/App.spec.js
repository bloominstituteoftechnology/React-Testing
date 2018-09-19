import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should show 0 by default", () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe("0");
    expect(instance.state.next).toBeNull();
    expect(instance.state.operation).toBeNull();
  });
});
