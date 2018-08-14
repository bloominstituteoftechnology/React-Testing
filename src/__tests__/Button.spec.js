import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });



    it('has className of component-button when no props provided', () => {
    const button = shallow(<Button />)
    expect(button.hasClass('component-button')).toBe(true)
  })
   it('has className of orange when orange prop provided', () => {
    const button = shallow(<Button orange />)
    expect(button.hasClass('orange')).toBe(true)
  })
   it('has className of wide when wide prop provided', () => {
    const button = shallow(<Button wide />)
    expect(button.hasClass('wide')).toBe(true)
  })
   it('has classNames of component-button, orange, and wide, when both orange and wide props provided', () => {
    const button = shallow(<Button orange wide />)
    expect(button.hasClass('component-button')).toBe(true)
    expect(button.hasClass('orange')).toBe(true)
    expect(button.hasClass('wide')).toBe(true)
  })
   it('has inner text set to name prop', () => {
    const button = shallow(<Button name='x' />)
    expect(button.text()).toBe('x')
  })
});
