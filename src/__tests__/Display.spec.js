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

  //should have props
  it('should have props', () => {
  const wrapper = shallow(<Display />);
  expect(wrapper.props().children).toBeTruthy();
  });
});
