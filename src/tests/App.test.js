import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  const component = shallow(<App />);
  const instance = component.instance();
  it("should set isLocked to true when component mounts", () => {
    const expected = "0";

    expect(instance.state.total).toEqual(expected);
  });

  it("should have two children siblings", () => {
    expect(component.find("div").children()).toHaveLength(2);
  });
});
