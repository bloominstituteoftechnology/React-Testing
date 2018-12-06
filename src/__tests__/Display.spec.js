import React from 'react';
import { shallow } from 'enzyme';
import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });
  it('should render a div with the className "component-display"', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div.component-display').length).toBe(1);
  });
  it('shoud have an inital prop with the value of "0"', () => {
    const value = '0';
    const wrapper = shallow(<Display value={value} />);
    const instance = wrapper.instance();
    expect(instance.props.value).toBe('0');
  });
  it('should have one child that holds the value', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div.value').length).toBe(1);
  });
});
