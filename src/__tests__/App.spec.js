import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders matched snapshots", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders <div className="component-app">', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find(".component-app");
    expect(elements.length).toBe(1);
  });
});
