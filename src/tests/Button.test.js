import React from "react";
import ReactDOM from "react-dom";
import sinon from "sinon";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  const wrapper = shallow(<Button name='hello world' clickHandler={() => {wrapper.setProps({name:'hello'})}}/>);
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });
  it("returns length of children", () => {
    expect(wrapper).toHaveLength(1);
  });
  it ('returns the click should change the prop name', () => {
    expect(wrapper.instance().props.name).toBe('hello world');
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().props.name).toBe('hello');
  })
  it('check snapshot',()=>{
  
    let element = shallow(<Button/>)
    expect(element).toMatchSnapshot()

  })
  
  
  
  // it('should check check if there is div with the class name of "component-button"', () => {
  //   const wrapper = shallow(
  //     <Button>
  //       <div className="component-button" />
  //     </Button>
  //   );
  //   console.log(wrapper);
  //   expect(wrapper.contains(<div className="component-button" />)).toEqual(
  //     true
  //   );
  // });
});




