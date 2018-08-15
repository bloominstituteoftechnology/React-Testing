import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import calculate from '../logic/calculate.js';

import App from '../App';

jest.mock('../logic/calculate.js');

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
    expect(wrapper.find('Display').length).toBe(1);
  });

  it('renders the Panel Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Panel').length).toBe(1);
  });

  it('should pass the total to the Display component if next is null', () => {
    const root = shallow(<App />);
    const instance = root.instance();

    root.setState({ total: '7', next: null });
    const value = root.find({ value: instance.state.total });

    expect(value.length).toBe(1);
  });
  describe('handleClick()', () => {
    it('should call "calculate" exactly one time', () => {
      // to know how many times a function is called
      const root = shallow(<App />);
      const instance = root.instance();
      const buttonName = 'logan';

      instance.handleClick(buttonName);

      expect(calculate).toHaveBeenCalledTimes(1);
    });

    it('should call "calculate" passing the state and buttonName', () => {
      // to know how many times a function is called
      const root = shallow(<App />);
      const instance = root.instance();
      const buttonName = 'logan';
      const stateObject = { total: '3', next: null, operation: null };

      root.setState(stateObject);
      instance.handleClick(buttonName);

      expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
    });
  });
});
