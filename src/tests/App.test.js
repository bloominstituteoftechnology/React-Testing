import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render display component', () => {
    const app = shallow(<App />);
    const display = app.find('Display');
    expect(display.length).toEqual(1);
  })

  it('should render panel component', () => {
    const app = shallow(<App />);
    const panel = app.find('Panel');
    expect(panel.length).toEqual(1);
  })

  it('should have a state with three properties', () => {
    const app = shallow(<App />);
    const instance = app.instance();
    expect(Object.keys(instance.state).length).toEqual(3);
    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  })
});


