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

  // expect(wrapper.containsMatchingElement(<div data-foo="foo">Hello</div>)).to.equal(true);
  it("should call 19 Button components", () => {
    const panel = shallow(<Panel />);
    // expect(panel.containsMatchingElement("Button").toEqual(true));
    console.log(panel.getDOMNode("div"));
  });

  it("should pass a clickHandler to buttons", () => {});
});

// should have a div with class name component-panel
// should call 19 Button components
// should pass a clickHandler to buttons
