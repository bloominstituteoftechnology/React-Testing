import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  const wrapper = shallow(<Button />);
  const tree = renderer.create(<Button />).toJSON();
  it("should match snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
  it("should render w/o crashing", () => {});
});
