import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders Display without crashing', () => {
    shallow(<Display />);
  });

  it('renders Panel without crashing', () => {
    shallow(<Panel />);
  });

  it('state is initially set', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().total).toBe('0');
    expect(wrapper.state().next).toBeNull();
    expect(wrapper.state().operation).toBeNull();
  })
});
