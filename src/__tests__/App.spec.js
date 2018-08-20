import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import calculate from '../logic/calculate';

jest.mock('../logic/calculate.js');


describe('<App />', () => {
  const app=shallow(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render a Display component', () => {
    const display = app.find('Display');
    expect(display.length).toBe(1);
  })

  it('should render a Panel component', () => {
    const panel = app.find('Panel');
    expect(panel.length).toBe(1);
  })

  it('should have state Total with initial value 0', () => {
    expect(app.state().total).toEqual('0');
  })

  describe('HandleClick()', () => {
    it('should call "calculate" 1 time', () => {
      const root = shallow(<App />);
      const instance = root.instance();
      const buttonName = 'buttonname';
      
      instance.handleClick(buttonName);
      expect(calculate).toHaveBeenCalledTimes(1);
    }) 
  })

});
