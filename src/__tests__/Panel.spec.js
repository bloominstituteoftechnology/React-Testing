import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('renders a div with a class of component-panel', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div.component-panel').length).toBe(1);
  });

  it('passes props to button component', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find('Button');
    expect(buttons.first().props().name).toBe('AC');
  });

  it('renders all the button components', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('Button').length).toBe(19);
  });
});
