import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "../testsetup";

import Display from "../components/Display/Display";

describe("<Display />", () => {
  it("renders without crashing and matches the snapshot", () => {
    const com = shallow(<Display />);
    expect(com).toMatchSnapshot();
  });
});
