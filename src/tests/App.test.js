import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("should contain a Display component", () => {
    const app = shallow(<App />);

    expect(app.find("Display").length).toBe(1);
  });

  it("Display component should have value prop", () => {
    const display = shallow(<App />).find("Display");
    expect(display.props()).toEqual({ value: "0" });
  });

  it("should contain a Panel component", () => {
    const app = shallow(<App />);

    expect(app.find("Panel").length).toBe(1);
  });

  it("should have an initial state of 0 and null", () => {
    const app = shallow(<App />);

    expect(app.state()).toEqual({
      total: "0",
      next: null,
      operation: null
    });
  });
});
