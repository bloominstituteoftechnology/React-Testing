import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Panel from "../components/Panel/Panel";

describe("<Panel />", () => {
  it("renders without crashing", () => {
    shallow(<Panel />);
  });
  it("matches snapshot", () => {
    const snapshot = renderer.create(<Panel />).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
