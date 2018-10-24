import React from "react";
import { shallow } from "enzyme";
import "../testsetup";
import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("should render without crashing and match snapshot", () => {
    const com = shallow(<Panel />);
    expect(com).toMatchSnapshot();
  });
});
