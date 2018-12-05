import React from "react";
import { shallow } from "enzyme";

import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });
  it("renders all panels", () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find("div.component-panel").children();
    expect(elements.length).toBe(5);
  });
  it('should return class property', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.findWhere(n => n.name() === 'Button' && n.prop('orange') === true);
    expect(elements.length).toEqual(5);
  });
});
