import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

import calculate from '../logic/calculate.js';

jest.mock('../logic/calculate.js');

describe('<App />', () => {

  it(`renders without crashing`, () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it(`should render exactly one Display component`, () => {
    const root = shallow(<App />);
    const display = root.find('Display');
    expect(display.length).toEqual(1);
  });

  it(`should render exactly one Panel component`, () => {
    const root = shallow(<App />);
    const panel = root.find('Panel');
    expect(panel.length).toEqual(1);
  });

  it(`should pass the total to the Display component if next is null`, () => {
    const root = shallow(<App />);
    const totalValue = '93849387';
    root.setState({ total: totalValue, next: null });
    const value = root.find({ value: totalValue });

    expect(value.length).toBe(1);
  });

  describe('handleClick', () => {
    it(`should call 'calculate' exactly one time`, () => {
      const buttonName = '=';
      const root = shallow(<App />);
      const instance = root.instance();
      instance.handleClick(buttonName);
      expect(calculate).toHaveBeenCalledTimes(1);
    });

    it(`should call 'calculate' passing the state and buttonName`, () => {
      const root = shallow(<App />);
      const instance = root.instance();
      const buttonName = '=';
      const stateObject = { total: '3', next: null, operation: null };

      root.setState(stateObject);
      instance.handleClick(buttonName);

      expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
    });

  });

});