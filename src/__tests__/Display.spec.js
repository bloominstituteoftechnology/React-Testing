import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });

  it('should display "" if no value prop is present', () => {
    const display = shallow(<Display />);
    const componentDisplay = display.find("component-display");
    expect(componentDisplay.contains(<div>''</div>));
  });

  it("should display whatever is passed in the value prop", () => {
    const display = shallow(<Display value="6" />);
    const componentDisplay = display.find("component-display");
    expect(componentDisplay.contains(<div>'6'</div>));
  });
});
