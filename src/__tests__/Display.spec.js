import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });

  //how does is this supposed to work??
  // it("should render whatever value it gets passed", () => {
  //   const wrap = shallow(<Display value={"6"} />);
  //   expect(wrap.contains(<div className="displayTest">6</div>)).toEqual(true);
  // });

  it('set props', () => {
    const wrapper = mount(<Display value="8"/>);
    expect(wrapper.props().value).toBe('8');
  });

  it('show value', ()=> {
    const wrapper = mount(<Display value="0"/>)
    const display = wrapper.find('.component-display');
    expect(display.text()).toEqual('0');
  })
});
