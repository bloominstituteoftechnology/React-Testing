import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
describe("App Component", () => {
  it("shallow renders without crashing", () => {
    shallow(<App />);
  });
  it("renders exactly one component-app class div", () => {
    const app = shallow(<App />);
    const headers = app.find(".component-app");
    expect(headers.length).toEqual(1);
  });
  it("renders exactly one Display component", () => {
    const app = shallow(<App />);
    const headers = app.find("Display");
    expect(headers.length).toEqual(1);
  });
  it("renders exactly one Panel component", () => {
    const app = shallow(<App />);
    const headers = app.find("Panel");
    expect(headers.length).toEqual(1);
  });
  it("matches snapshot", () => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
