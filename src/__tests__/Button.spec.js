import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';
import calculate from '../logic/calculate.js';

jest.mock('../logic/calculate.js');

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);

    it('should pass the total to the Display component if next is null', () => {
      const root = shallow(<App />);
      const instance = root.instance();
  
      root.setState({ total: '7', next: null });
      const value = root.find({ value: instance.state.total });
  
      expect(value.length).toBe(1);
    });

    describe('handleClick()', () => {
      it('should call "calculate" exactly one time', () => {
        const root = shallow(<App />);
        const instance = root.instance();
        const buttonName = 'test';
  
        instance.handleClick(buttonName);
  
        expect(calculate).toHaveBeenCalledTimes(1);
      });
  
      it('should call "calculate" passing the state and buttonName', () => {
        const root = shallow(<App />);
        const instance = root.instance();
        const buttonName = 'test';
        const stateObject = { total: '3', next: null, operation: null };
  
        root.setState(stateObject);
        instance.handleClick(buttonName);
  
        expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
      });
  
      it('should render the Display and Panel components', () => {
        const root = shallow(<App />);
  
        const display = root.find('Display');
        const panel = root.find('Panel');
  
        expect(display.length).toBe(1);
        expect(panel.length).toBe(1);
      });
    });
  });
});
