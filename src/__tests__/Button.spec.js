import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a div', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('div');

    expect(elements.length).toEqual(1);
  });

  it('renders a button', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('button');

    expect(elements.length).toEqual(1);
  });

  it('has a click handler', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button').length).toBe(1);
  });
});
