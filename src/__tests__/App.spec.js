import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import App from "../App";
import Display from "../components/Display/Display";
import { wrap } from "module";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  const wrapper = shallow(<App />);
  const elements = wrapper.find("div.component-app");
  const instance = wrapper.instance();
  it("should match snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    wrapper;
  });
  it("should only have one div with a class name of component-app", () => {
    expect(elements.length).toBe(1);
  });
  it("should have two children elements", () => {
    expect(elements.children().length).toBe(2);
  });
  it("should have App.state.total total of '0' by default", () => {
    expect(instance.state.total).toBe("0");
  });
  it("should have App.state.total of 1337 after being set", () => {
    instance.setState({ total: "1337" });
    expect(instance.state.total).toBe("1337");
  });
  describe("App Children", () => {
    it("should have one called Display", () => {
      expect(wrapper.find(Display).length).toBe(1);
    });
    it("should have 1 attr called value with value of '1337'", () => {
      expect(wrapper.find(Display).props().value).toBe("1337");
    });
  });
});
