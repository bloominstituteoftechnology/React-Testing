import React from "react";
import { shallow } from "enzyme";

import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });
  it("renders the panel", () => {
    expect(shallow(<Panel />).find(".component-panel").length).toBe(1);
  });
  it("panel has 5 children", () => {
    expect(
      shallow(<Panel />)
        .find(".component-panel")
        .children()
        .find("div").length
    ).toBe(5);
  });
  it("panel has 19 buttons", () => {
    expect(shallow(<Panel />).find("Button").length).toBe(19);
  });
});
