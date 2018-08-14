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

it('should have total, next, operation in state', () => {
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

it('should have a handleClick method that updates state', () => {
  const component = shallow(<App />);
  component.instance().handleClick('9');
  expect(component.state('next')).toEqual('9');
  component.instance().handleClick('+');
  expect(component.state('operation')).toEqual('+');
  expect(component.state('total')).toEqual('9');
});
