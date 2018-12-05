import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div called component-app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.component-app').length).toBe(1);
  });

  it('instantiates at zero', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe('0');
  });

  it('contains two child components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.children().length).toBe(2);
  });
});
