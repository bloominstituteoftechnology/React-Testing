import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  //should have a class of component-display
  it('should have a class of component-display', () => {
    const wrapper = shallow(<Display />);
    const element = wrapper.find('.component-display');
    expect(element.length).toBe(1);
  });

  //vera's code
  it('should display a numerical string', () => {
    const wrapper = shallow(<Display />);
    const elements = wrapper.find('div').not('div.component-display');

  expect(elements.text()).toMatch(/[0-9]*/);
  })
});
