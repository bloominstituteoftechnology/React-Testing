import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('renders a component-display div', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div.component-display').length).toBe(1);
  });
});
