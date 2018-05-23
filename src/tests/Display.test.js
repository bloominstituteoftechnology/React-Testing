import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });
  it("should display as a value in the div of whatever is passed to it in props ", () => {
    const component = shallow(<Display value={"125.33"} />);
    expect(component.contains(<div>125.33</div>)).toEqual(true);
  });
  it("should should contain two divs", () => {
    const component = shallow(<Display />);
    expect(component.find("div")).toHaveLength(2);
  });
});
