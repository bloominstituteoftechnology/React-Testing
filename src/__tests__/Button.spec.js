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

  // it("should display a value passed as a prop", () => {
  //   const button = shallow(<Button title="a title" />);
  //   const name = button.find(".component-button");
  //   expect(name.text()).toEqual("a title");
  // });
});
