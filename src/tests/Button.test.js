import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });
  it("has one child button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("div").children("button")).toHaveLength(1);
  });
  it("fires the clickhandler when clicked", () => {
    const clickHandler = sinon.spy();
    const wrapper = shallow(<Button clickHandler={clickHandler} />);
    wrapper.find("button").simulate("click");
    expect(clickHandler.calledOnce).toEqual(true);
  });
});
