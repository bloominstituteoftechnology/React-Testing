import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should have the default properties total, next, and operation in its state", () => {
    const app = shallow(<App />);
    expect(app.state("total")).toEqual("0");
    expect(app.state("next")).toEqual(null);
    expect(app.state("operation")).toEqual(null);
  });

  it("should render `component-app`", () => {
    const app = shallow(<App />);
    expect(app.find(".component-app").length).toEqual(1);
  });

  it("should have a handleClick method that determines state", () => {
    const app = shallow(<App />);
    app.instance().handleClick("1");
    expect(app.state("next")).toEqual("1");
  });
});
