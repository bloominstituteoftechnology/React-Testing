import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('renders a component-display div', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div.component-display').length).toBe(1);
  });

  it('displays value when it is passed to the component', () => {
    const wrapper = shallow(<Display value="3" />);
    let display = wrapper.find('.component-display div');
    expect(display.text()).toBe('3');
  });
});
