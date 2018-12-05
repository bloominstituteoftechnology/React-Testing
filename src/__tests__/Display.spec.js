import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });

  it('has the prop "value" being passed down to it', () => {
    const wrapper = shallow(<Display />);
    const instance = wrapper.instance();

    expect(instance.props.length).toBe(1);
  });
});

/**
 * 1) accepts a prop 'value' from App.js
 * 2) displays that value in a div
 * 3) //TODO:???
 */
