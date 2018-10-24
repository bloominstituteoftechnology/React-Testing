import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Panel from "../components/Panel/Panel";

Enzyme.configure({ adapter: new Adapter() });

describe("<Panel />", () => {
  it("should render without crashing and match snapshot", () => {
    const com = shallow(<Panel />);
    expect(com).toMatchSnapshot();
  });
});
