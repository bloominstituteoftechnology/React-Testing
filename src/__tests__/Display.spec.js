import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });

  it('displays the component', () => {
    const wrapper = shallow(<Display />);

    const display = wrapper.find('div.component-display');

    expect(display.length).toBe(1);
  })

  it('displays passed in value', () => {
    const passed = 'Value';
    const wrapper = shallow(<Display value={passed} />);
    const display = wrapper.find('div.component-display');

    expect(display.text()).toEqual(passed);
  });

});
