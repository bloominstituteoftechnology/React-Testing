import React from "react";
import { shallow } from "enzyme";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });
  it("renders the display", () => {
    expect(shallow(<Display />).find(".component-display").length).toBe(1);
  });
  it("display has one child", () => {
    expect(
      shallow(<Display />).find(".component-display").children.length
    ).toBe(1);
  });
});
