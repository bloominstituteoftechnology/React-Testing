import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('div has class of component-display', () => {
    const wrapper = shallow(<Display />);

    const compDis = wrapper.find('div.component-display');

    expect(compDis.length).toBe(1);
  });

  it('changes text when value changes', () => {
    const wrapper = shallow(<Display value={'4'} />);

    const change = wrapper.find('div.component-display div');

    expect(change.text()).toBe('4');
  });
});
