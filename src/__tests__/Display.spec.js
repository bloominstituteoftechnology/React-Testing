import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('renders the value provided as a prop', () => {
    const display = shallow(<Display value='256' />)
    expect(display.text()).toBe('256')
  })

  it('has a single child div', () => {
    const display = shallow(<Display />)
    expect(display.children().length).toBe(1)
    expect(display.childAt(0).type()).toBe('div')
  })
});
