import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('should have a state.total that defaults to "0"', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe('0');
  });
  it('should have a state.next that defaults to null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.next).toBe(null);
  });
  it('should have a state.operation that defaults to null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.operation).toBe(null);
  });
  // describe('button click', () => {
  //   const wrapper = shallow(<App />);
  //   const instance = wrapper.instance();
  //   const panel = wrapper.find(Panel);
  //   expect(instance.state.total).toBe('0');
  // });
});
