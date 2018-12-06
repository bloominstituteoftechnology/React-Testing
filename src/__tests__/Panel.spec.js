import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('renders a panel', () => {
    const wrapper = shallow(<Panel />);
    const panel = wrapper.find('.component-panel');

    expect(panel).toBeDefined();
  });

  it('displays buttons', () => {
    const wrapper = shallow(<Panel />);
    const buttons = wrapper.find('Button');

    expect(buttons).toHaveLength(19);
  });
});
