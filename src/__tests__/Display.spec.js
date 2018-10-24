import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should display div with class value-display', () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find('div.value-display');

    expect(display.length).toBe(1);
  });

  describe('Test value prop', () => {
    it('value-display should display value prop', () => {
      const wrapper = mount(<Display value="2" />);
      const display = wrapper.find('div.value-display');

      expect(wrapper.props().value).toBeDefined();
      expect(display.text()).toBe('2');
    });
  });
});
