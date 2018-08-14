import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('initializes state with a total of 0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().total).toBe('0');
  });

  it('initializes state with a next value of null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().next).toBe(null);
  });

  it('initializes state with an operation value of null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().operation).toBe(null);
  });

  it('renders the Display Component', () => {
    const wrapper = shallow(<App />);
  });

  it('renders the Panel Component', () => {
    const wrapper = shallow(<App />);
  });
});
