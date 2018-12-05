import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });
  it("renders a div", () => {
    expect(shallow(<Button />).find("div").length).toBe(1);
  });
  it("div has 1 child", () => {
    expect(
      shallow(<Button />)
        .find("div")
        .children().length
    ).toBe(1);
  });
  it("renders a button", () => {
    expect(shallow(<Button />).find("button").length).toBe(1);
  });
});
