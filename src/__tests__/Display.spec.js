import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });
  it('should return two divs', () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find('div');

    expect(elements.length).toEqual(2);
  });
  it('should return the component-display class', () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find('.component-display');

    expect(elements.length).toEqual(1);
  });
  it('should return a value', () => {
    const wrapper = shallow(<Display />);
    wrapper.setProps({ value: '3' });

    expect(wrapper.text()).toBe('3');
  });
  it('should return an empty string', () => {
    const wrapper = shallow(<Display />);
    wrapper.setProps({ value: null });

    expect(wrapper.text()).toBe('');
  });
});
