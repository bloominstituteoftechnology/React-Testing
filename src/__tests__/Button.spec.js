import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  // test when we click the handle click function is called 

  // it('should call the handle click function when called', () => {
  //   const wrapper = shallow(<App />)
  //   const instance = wrapper.instance();

  //   const button = wrapper.find('foobar');

  //   // const btnEvent =
  //    button.simulate('click');

  //   expect(wrap.state('next')).toEqual(button.name));
  // })

  // test if name is properly displayed 
  it('should display the correct name given the props', () => {
    const wrapper = shallow(<Button name="4" />)
    const instance = wrapper.instance();
    const button = wrapper.find('button');

    expect(button.text()).toEqual("4")
  })

  // test if the classname is correctly displayed 

  it('className should equal orange', () => {
    const wrapper = shallow(<Button orange />)
    const instance = wrapper.instance();
    const button = wrapper.find('.component-button'); 
    expect(button.hasClass('orange')).toBe(true)
  })

  it('className should equal wide', () => {
    const wrapper = shallow(<Button wide />)
    const instance = wrapper.instance();
    const button = wrapper.find('.component-button'); 
    expect(button.hasClass('wide')).toBe(true)
  })

  //test if proptypes is working


});
