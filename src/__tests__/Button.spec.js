import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("tests display name", () => {
    const wrap = shallow(<Button name="test" />);

    expect(wrap.text()).toEqual("test");
  });

  it("button test", () => {
    const wrap = shallow(<Button name="test2" clickHandler={() => "fail"} />);
    const inst = wrap.instance();
    const btn = wrap.find("button");
    btn.simulate("click");

    expect(inst.props.clickHandler()).toEqual("fail");
  });
});
