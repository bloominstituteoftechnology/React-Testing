import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
});

it('should have a className called `component-button orange` if it has a prop named `orange`', () => {
  const wrapper = shallow(<Button orange />);
  const componentBtn = wrapper.find('.component-button .orange');

  expect(componentBtn).toHaveLength(1);
})

it('should have a className called `component-button wide` if it has a prop named `wide`', () => {
  const wrapper = shallow(<Button wide />);
  const componentBtn = wrapper.find('.component-button .wide');

  expect(componentBtn).toHaveLength(1);
})

it('should have a className called `component-button` if it has no props called `wide` or `orange`', () => {
  const wrapper = shallow(<Button />);
  const componentBtn = wrapper.find('.component-button');

  expect(componentBtn).toHaveLength(1);
})

it('should have a method called handleClick', () => {
  const wrapper = shallow(<Button />);
  const instance = wrapper.instance();

  expect(instance.handleClick).toBeDefined();
})

