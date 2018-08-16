import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  test('Should have class named "component-display"', () => {
    const display = shallow(<Display />);
    expect(display.hasClass("component-display")).toEqual(true);
  });
  test('Should display the prop as value', () => {
    const display = shallow(<Display value='test-props' />);
    const value = display.find('.value')
    expect(value.text()).toEqual('test-props');
  });
});
