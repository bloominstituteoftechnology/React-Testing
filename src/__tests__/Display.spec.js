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

  it('should take in props of value', () => {
    const wrapper = mount(<Display value="0" />);

    expect(wrapper.props().value).toBe('0');
  });

  it('should adapt based on props', () => {
    const wrapper = mount(<Display value="5" />);

    expect(wrapper.props().value).toBe('5');
  });

  it('should display the value on the div', () => {
    const wrapper = shallow(<Display value="0" />);
    console.log(wrapper.props);
    const display = wrapper.find('.display');
    expect(display.text()).toEqual('0');
  });
});
