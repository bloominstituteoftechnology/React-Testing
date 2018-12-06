import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('renders display', () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find('.component-display');

    expect(display.length).toBe(1);
  });

  it('displays component prop', () => {
    const wrapper = shallow(<Display value='test' />);
    const displayed = wrapper.find('.component-display > div');

    expect(displayed.text()).toBe('test');
  });
});
