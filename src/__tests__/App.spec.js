import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders a div", () => {
    expect(shallow(<App />).find(".component-app").length).toBe(1);
  });

  it("total is 0", () => {
    expect(shallow(<App />).instance().state.total).toBe("0");
  });
});
