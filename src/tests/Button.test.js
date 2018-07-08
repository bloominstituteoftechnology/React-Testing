import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("should have a button", () => {
    const button = shallow(<Button />);

    expect(button.find("button").length).toEqual(1);
  });

  it("should have classname orange when passed an orange prop", () => {
    const button = shallow(<Button orange />);

    expect(button.find(".orange")).toBeTruthy();
  });
  it("should have classname wide when passed an wide prop", () => {
    const button = shallow(<Button wide />);

    expect(button.find(".wide")).toBeTruthy();
  });

  it("should call clickHandler when clicked", () => {
    const spy = jest.fn();
    const button = shallow(<Button clickHandler={spy} />);

    button.children().simulate("click");
    expect(spy.mock.calls.length).toBe(1);
  });
});
