import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  }); 

  it('renders a button', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('button');
    expect(elements.length).toBe(1);
  });  

  it('renders an orange button', () => {
    const wrapper = shallow(<Button orange />);
    const elements = wrapper.find('.orange');
    expect(elements.length).toBe(1);
  });  

  it('renders a wide button', () => {
    const wrapper = shallow(<Button wide />);
    const elements = wrapper.find('.wide');
    expect(elements.length).toBe(1);
  });  

}); 