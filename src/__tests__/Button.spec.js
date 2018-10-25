import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Button from "../components/Button/Button";
import { wrap } from "module";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  const wrapper = shallow(<Button />);
  const tree = renderer.create(<Button />).toJSON();
  it("should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
  it("should render w/o crashing", () => {
    wrapper;
  });
  it("should have a div with class name component-button", () => {
    expect(wrapper.find("component-button")).toBeTruthy();
  });
  it("should have a button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
  it("simulates click", () => {
    expect(wrapper.find('button').simulate('onClick').props().name);
  });
});
