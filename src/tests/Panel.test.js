import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Panel from "../components/Panel/Panel";

Enzyme.configure({ adapter: new Adapter() });

describe("<Panel />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Panel />, div);
  });

  it("should have 19 buttons", () => {
    const panel = shallow(<Panel />);
    expect(panel.find("Button").length).toBe(19);
  });

  // it("should have 5 orange classNames", () => {
  //   const panel = shallow(<Panel />);
  //   expect(panel.find(".orange")).toBe(5);
  // });

  it("should call clickHandler when clicked", () => {
    const spy = jest.fn();
    const panel = shallow(<Panel clickHandler={spy} />);
    panel.find("button").forEach((button, i) => {
      button.simulate("click");
      expect(spy.mock.calls.length).toBe(i + 1);
    });
  });
});
