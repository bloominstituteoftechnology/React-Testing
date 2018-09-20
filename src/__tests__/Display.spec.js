import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
		shallow(<Display />);
  });
  it('show value', () => {
    const wrapper = mount(<Display value="9"/>);
    const display = wrapper.find('.component-display');
    expect(display.text()).toEqual('9');
  });
  it('set props', () => {
    const wrapper = mount(<Display  value="0"/>);
    expect(wrapper.props().value).toBe('0');
  });
});
