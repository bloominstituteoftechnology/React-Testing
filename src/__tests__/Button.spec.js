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
  //   it("operators should load orange", () => {

  //   });
  // });
});
