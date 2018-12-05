import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('renders a component-panel div', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div.component-panel').length).toBe(1);
  });

  it('renders the buttons of the calculator', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button').length).toBe(19);
  });
});
