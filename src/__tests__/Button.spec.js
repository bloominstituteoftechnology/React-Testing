import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});

it('simulates click events', () => {
  const spy = sinon.spy();
  const button = shallow(<Button clickHandler={spy} />);
  button.find('button').first().simulate('click');
  expect(spy.calledOnce).toBe(true)
});