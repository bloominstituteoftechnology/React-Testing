import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders shallow without crashing', () => {
    shallow(<App />);
  });
  it('state is initialized', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toBe('0');
    expect(wrapper.state().next).toBeFalsy();
    expect(wrapper.state().operation).toBeFalsy();
  });
});
