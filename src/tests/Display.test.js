import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });
  it("check snapshot", () => {
    let element = shallow(<Display />);
    expect(element).toMatchSnapshot();
  });
  it("returns length of children", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toHaveLength(1);
  });
  it("bull", () => {
    const wrapper = shallow(<Display />);
    var rander = wrapper.find(
      <Display>
        <div className="component-display" />
      </Display>
    );
    console.log(wrapper.contains( <div className="component-display" ></div>));
    expect(
      wrapper.containsMatchingElement(
        <div className="component-display" />
      )
    ).toEqual(true);
  });
});
