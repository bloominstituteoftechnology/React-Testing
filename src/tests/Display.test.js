import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../components/Display/Display";
import App from "../App";

import { DH_NOT_SUITABLE_GENERATOR } from "constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });

  it("should not differ from snapshot", () => {
    let props = { total: "0", next: null, operation: null };
    let element = shallow(<Display {...props} />);
    expect(element).toMatchSnapshot();
  });

  it("should contain div with specific className", () => {
    const wrapper = mount(<Display />);

    expect(
      wrapper.contains(
        <div className="component-display">
          <div />
        </div>
      )
    ).toEqual(true);
  });
});
