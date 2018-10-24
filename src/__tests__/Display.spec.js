import React from 'react';
import { shallow } from 'enzyme';


import Display from '../components/Display/Display';



describe('<Display />', () => {
  it('renders shallow without crashing', () => {
    shallow(<Display />);
  });
  it('renders prop name in div', () => {
    const wrapper = shallow(<Display value="abcd" />);
    const finder = wrapper.find('div');
     expect(finder.last().text()).toBe('abcd');
  });
});
