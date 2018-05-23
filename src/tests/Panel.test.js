import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
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
    const element = shallow(<Panel />);
    expect(element.find("Button")).toHaveLength(19);
  });
  // it("all 19 buttons should connect to the handleClick function", () => {
  //   const element = shallow(<Panel />);
  //   expect(element.find("clickHandler")).toHaveLength(19);
  // });
});
