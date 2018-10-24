import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';



describe('<App />', () => {
  it('renders without crashing',  () => {
    shallow(<App />);
  })
  it('state has been initialized', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBe('0');
    expect(wrapper.state('next')).toBe(false);
    expect(wrapper.state('operation')).toBe(false);
  });
});
