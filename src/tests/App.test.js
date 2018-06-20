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

  it('should render 1 panel element', () => {
    const app = shallow(<App />);

    const panels = app.find("Panel");

    expect(panels.length).toEqual(1);
  });

  it('should render 1 display element', () => {
    const app = shallow(<App />);

    const display = app.find("Display");

    expect(display.length).toEqual(1);
  });

  it('should have correct default state', () => {
    const app = shallow(<App />);

    const instance = app.instance();

    const defaultState = {
      total: '0',
      next: null,
      operation: null
    };
    expect(instance.state).toEqual(defaultState);
  })

  it('should respond to button press', () => {
    const app = shallow(<App />);

    const instance = app.instance();

    instance.handleClick("5");

    expect(instance.state).toEqual({
      total: null,
      next: "5",
      operation: null
    });
  })
});

