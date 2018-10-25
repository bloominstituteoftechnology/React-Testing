import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('should render the component', () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find('div.component-display');
    expect(display.length).toBe(1);
  });

  it('should have value', () => {
    const num = '10';
    const wrapper = shallow(<Display value = {num} />);
    const display = wrapper.find('div.component-display');
    expect(display.text()).toEqual('10');
  })
});
