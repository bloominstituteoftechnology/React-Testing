import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Panel from "../components/Panel/Panel";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe.skip("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });

  it("renders 19 buttons", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(Button).length).toEqual(19);
  });
});
