import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

it('should have total, next, operation initialized to these values', () => {
  const app = shallow(<App />);
  const instance = app.instance();
  expect(instance.state.total).toEqual('0');
  expect(instance.state.next).toBeDefined();
  expect(instance.state.total).toBeDefined();
});

it('should have render component-app', () => {
  const component = shallow(<App />);
  expect(component.find('.component-app')).toHaveLength(1);
});

it('should have a handleClick method that updates state and preforms arithmatic operations', () => {
  const component = shallow(<App />);
  component.instance().handleClick('4');
  expect(component.state('next')).toEqual('4');
  component.instance().handleClick('+');
  expect(component.state('operation')).toEqual('+');
  component.instance().handleClick('4');
  expect(component.state('next')).toEqual('4');
  component.instance().handleClick('=')
  expect(component.state('total')).toEqual('8');
});

it('should clear state and display when AC is clicked', () => {
  const component = shallow(<App />);
  component.instance().handleClick('AC');
  expect(component.state('operation')).toBeDefined();
  expect(component.state('next')).toBeDefined();
  expect(component.state('total')).toEqual('0');
})

it('should return invalid input if divided by 0', () => {
  const component = shallow(<App />);
  component.instance().handleClick('5');
  expect(component.state('next')).toEqual('5');
  component.instance().handleClick('÷');
  expect(component.state('operation')).toEqual('÷')
  component.instance().handleClick('0');
  expect(component.state('next')).toEqual('0')
  component.instance().handleClick('=')
  expect(component.state('total')).toEqual('invalid');
})