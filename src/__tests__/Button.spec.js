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

  it("renders an button", () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find("button");

    expect(elements.length).toBe(1);
  });

  it("renders an div", () => {
    const wrapper = shallow(<Button />);

    const elements = wrapper.find("div");

    expect(elements.length).toBe(1);
  });

  it("renders an orange button", () => {
    const component = shallow(<Button orange />);
    expect(component.find(".orange")).toHaveLength(1);
  });

  it("renders a wide button", () => {
    const component = shallow(<Button wide />);
    expect(component.find(".wide")).toHaveLength(1);
  });
});
