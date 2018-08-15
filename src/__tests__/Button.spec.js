import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("should display a name passed as a prop", () => {
    const button = shallow(<Button orange />);
    const name = button.find(".component-button .orange");
    expect(name).toHaveLength(1);
    expect(name.hasClass("orange")).toEqual(true);
  });
  it("should display button wide as prop", () => {
    const button = shallow(<Button wide />);
    const name = button.find(".component-button .wide");
    expect(name.hasClass("wide")).toEqual(true);
  });
  it("should have a function named handleClick", () => {
    const tested = shallow(<Button />);
    const test = tested.instance();
    expect(test.handleClick).toBeDefined();
  });
});

/*

*/
