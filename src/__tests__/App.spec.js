import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Display from "../components/Display/Display";
import Panel from "../components/Panel/Panel";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("renders Display without crashing", () => {
    shallow(<Display />);
  });
  it("renders Panel without crashing", () => {
    shallow(<Panel />);
  });
});
