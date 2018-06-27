import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';


describe('<Display />', () => {
  const display = shallow(<Display />);
  const foundDisplay = display.find(".component-display");

  it('renders without crashing', () => {
    display
  });

  it("have a div that displays a value", () =>{
    expect(foundDisplay.length).toEqual(1)
  })

  it("have a value that's a string", ()=> {
    expect(typeof foundDisplay.text()).toEqual("string");
  })
})
