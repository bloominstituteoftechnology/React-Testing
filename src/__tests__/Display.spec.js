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
});

describe('Display', () => {
  it('renders display', () => {
    const display = shallow(<div className="component-display"></div>);
    expect(display.length).toBe(1);
  })
  it('test for classname, in different wat', () => {
    const display = shallow(<div className="component-display"></div>);
    expect(display.find('.component-display').exists()).toBe(true);
    // expect(display.childAt(0).type());
  })
})
