import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("should not differ from snapshot", () => {
    let element = shallow(<Button />);
    expect(element).toMatchSnapshot();
  });

  it("should have button element", () => {
    const wrapper = mount(<Button />);

    expect(wrapper.find("Button").exists()).toEqual(true);
  });
});
