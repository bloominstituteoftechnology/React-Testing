import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('defaults to zero as the total in state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
  });

  it('defaults to null as next in state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.next).toBe(null);
  });

  it('defaults to null as operation in state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state.operation).toBe(null);
  });

  it('should be a function', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(typeof instance.handleClick).toBe('function');
  });


  it('has a string for the button name', () => {
    const wrapper = mount(<App />);

    const button = wrapper.find('button').first();
    expect(typeof button.text()).toBe('string');
  });
});
