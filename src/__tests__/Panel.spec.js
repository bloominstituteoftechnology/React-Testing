import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Panel from "../components/Panel/Panel";
import Button from "../components/Button/Button";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });
  it("renders 19 <Button/ > components ", () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button')).toHaveLength(19);
  });
});
