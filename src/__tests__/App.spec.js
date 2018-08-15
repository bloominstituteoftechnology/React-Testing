import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('renders display and panel components', () => {
  const wrapper = shallow(<App />);
  
  it('renders the Display Component', () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });
  it('renders the Panel Component', () => {
    expect(wrapper.containsMatchingElement(<Panel />)).toEqual(true);
  });
})

it('should update state to 326 when buttons are clicked', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.handleClick('3');
  expect(wrapper.state('next')).toEqual('3');

  instance.handleClick('2');
  expect(wrapper.state('next')).toEqual('32');
  
  instance.handleClick('6');
  expect(wrapper.state('next')).toEqual('326');
});

it('should update state to 6 when multiplying 3 and 2', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.handleClick('3');
  expect(wrapper.state('next')).toEqual('3');

  instance.handleClick('x');
  expect(wrapper.state('operation')).toEqual('x');

  instance.handleClick('2');
  expect(wrapper.state('next')).toEqual('2');
  
  instance.handleClick('=');
  expect(wrapper.state('operation')).toEqual(null);

  expect(wrapper.state('total')).toEqual('6');
});