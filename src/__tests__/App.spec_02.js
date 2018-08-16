import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import calculate from '../logic/calculate.js';
import App from '../App';

jest.mock('../logic/calculate.js');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
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

    it('should render the Display and Panel components', () => {
      const root = shallow(<App />);

      const display = root.find('Display');
      const panel = root.find('Panel');

      expect(display.length).toBe(1);
      expect(panel.length).toBe(1);
    });
  });
});