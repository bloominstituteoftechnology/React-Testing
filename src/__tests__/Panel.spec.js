import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Panel from "../components/Panel/Panel";
import Button from "../components/Button/Button";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });

  it("should match snapshot", () => {
    const snapshot = renderer.create(<Panel />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });

  it("should render div with component-panel class", () => {
    const wrapper = shallow(<Panel />);

    expect(wrapper.find("div.component-panel").length).toBe(1);
  });

  it("should render 19 <Button /> components", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find(Button).length).toBe(19);
  });
});
