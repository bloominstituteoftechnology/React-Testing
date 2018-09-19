import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
// components
import Button from "../components/Button/Button";

describe("<Button />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Button />, div);
    });
  });
  // describe("prop check", () => {
  //   it("operator buttons should load orange", () => {
  //     const wrapper = shallow(<Button />);
  //     const instance = wrapper.instance();

  //     const button = wrapper.find("button");
  //     if (instance.state.props === 'orange'){
  //       expect(instance.state.orange).toEqual("orange");
  //     }
  //   });
  // });
});
