import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });

  it('check for component-panel class', () => {
    const wrapper = shallow(<Panel />);

    const compPan = wrapper.find('div.component-panel');

    expect(compPan.length).toBe(1);
  });

  it('that there are buttons', () => {
    const wrapper = shallow(<Panel />);

    const buttonCheck = wrapper.props().children;

    expect(buttonCheck.length).toBeGreaterThan(0);
  });
});
