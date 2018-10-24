import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';
import Button from '../components/Button/Button'

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should have a div with the classname: "component-display"', () => {
    const wrapper = shallow(<Display/>)
    const elements = wrapper.find("div.component-display")
    expect(elements.exists()).toBe(true)
  });
  it('should have a div with the value of "0"', () => {
    const wrapper = shallow(<Display value={"0"}/>)
    const elements = wrapper.find("div.component-display div")
    expect(elements.text()).toBe("0")
  });
  it('should have a div with the value of "5"', () => {
    const wrapper = shallow(<Display value={"5"}/>)
    const elements = wrapper.find("div.component-display div")
    expect(elements.text()).toBe("5")
  });  
});
