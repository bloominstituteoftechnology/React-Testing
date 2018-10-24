import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('handleClick function is present', () => {
    const wrapper = shallow(<App />);

    const instance = wrapper.instance().handleClick;

    expect(instance).toBeInstanceOf(Function);
  });

  it('default state is 0 and null', () => {
    const wrapper = shallow(<App />);

    const instance = wrapper.instance();

    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBeNull();
    expect(instance.state.operation).toBeNull();
  });
});
