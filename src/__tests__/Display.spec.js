import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
// components
import Display from "../components/Display/Display";

describe("<Display />", () => {
  describe("preloaded tests", () => {
    it("renders without crashing", () => {
      const div = document.createElement("div");
      ReactDOM.render(<Display />, div);
    });
  });
});
