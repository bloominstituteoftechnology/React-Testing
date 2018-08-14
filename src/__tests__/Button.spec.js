import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("should display a name passed as a prop", () => {
    const button = shallow(<Button name="a name" />);
    const name = button.find(".component-button");
    expect(name.text()).toEqual("a name");
  });
  
  it("should display no orange or wide property when not passed as a prop", () => {
    const button = shallow(<Button  />);
    expect(button.find('.component-button')).toHaveLength(1);
  });

  it("should display orange property when passed as a prop", () => {
    const button = shallow(<Button orange/>);
    expect(button.find('.component-button')).toHaveLength(1);
    expect(button.find('.orange')).toHaveLength(1);
  });

  it("should display wide property when passed as a prop", () => {
    const button = shallow(<Button wide />);
    const name = button.find(".component-button .wide");
    expect(name.hasClass("wide")).toEqual(true);
  });
  
  // it("calls the passed-in prop function with the button's name when clicked", () => {
  //   const func = sinon.spy();
  //   const component = shallow(<Button name="boo" clickHandler={func} />);
  //   component.find('button').simulate('click');
  //   expect(func.calledOnce).toEqual(true);
  //   expect(func.calledWith('boo')).toEqual(true);
  // });

});
