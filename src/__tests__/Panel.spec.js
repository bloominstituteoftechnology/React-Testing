import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';
import { toBuffer } from 'ip';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('should display component-panel', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('div.component-panel');

    expect(elements.length).toBe(1);
  });

  it('should display multiple buttons', () => {
    const wrapper = shallow(<Panel />);
    const elements = wrapper.find('Button');

    expect(elements.length).toBeGreaterThan(1);
  });
});
