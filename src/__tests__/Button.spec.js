import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });


it('should be orange if passed', () => {
  const app = shallow(<Button orange={true} />)

  const button = app.find('.component-button')

  expect(button.hasClass('orange')).toEqual(true);
})

it('should be wide if passed', () => {
  const app = shallow(<Button wide={true} />)

  const button = app.find('.component-button')

  expect(button.hasClass('wide')).toEqual(true);
})

it('should display a name passed as a prop', () => {
  const app = shallow(<Button name="this name" />)

  const button = app.find('.component-button')

  expect(button.text()).toEqual('this name');
})

it('simulates click events', () => {
    const spy = sinon.spy();
    const button = shallow(<Button handleClick={spy} />);
    button.find('button').first().simulate('click');
    expect(spy.calledOnce).toBe(true)
  });


});
