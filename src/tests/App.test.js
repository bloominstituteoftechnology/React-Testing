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
  it("should render the panel component", () => {
    const component = shallow(<App />);
    expect(component.find("Panel")).toHaveLength(1);
    expect(component.find("Display")).toHaveLength(1);
  });
  it("should render the display component", () => {
    const component = shallow(<App />);
    expect(component.find("Display")).toHaveLength(1);
  });
});
