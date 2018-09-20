import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    shallow(<Button />);
  });

  it("should update the state on app if clicked", () => {
    const wrapper = shallow(<Button />);
    
  });
});
