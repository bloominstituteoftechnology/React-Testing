import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import App from "../App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("look at state, total should be zero", () => {
    const wrapper = shallow(<App />);
    const inst = wrapper.instance();

    expect(inst.state.total).toEqual("0");
  });

  //   it('should match snapshot', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   console.log(tree)
  //   expect(tree).toMatchSnapshot();
  // });
});
