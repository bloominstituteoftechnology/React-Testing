import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should have one button', () => {
    const wrapper = shallow(<Button />);
    const elements = wrapper.find('button');

    expect(elements.length).toBe(1);
  });

  it('button text should display name prop', () => {
    const wrapper = mount(<Button name="2" />);
    const display = wrapper.find('button');

    expect(wrapper.props().name).toBeDefined();
    expect(display.text()).toBe('2');
  });
});
