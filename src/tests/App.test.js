import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  });
  // render
  it('renders one component-app', () => {
    const app = shallow(<App/>);
    const componentApp = app.find('.component-app');
    expect(componentApp.length).toEqual(1);
  });
  it('renders one Display component', () => {
    const app = shallow(<App/>);
    const display = app.find('Display');
    expect(display.length).toEqual(1);
  });
  it('renders one Panel component', () => {
    const app = shallow(<App/>);
    const panel = app.find('Panel');
    expect(panel.length).toEqual(1);
  });

  // default state
  it('should have a total of 0', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.total).toBe('0');
  });
  it('should have a next value of null', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.next).toBeNull();
  });
  it('should have a operation value of null', () => {
    const app = shallow(<App/>);
    const instance = app.instance();
    expect(instance.state.operation).toBeNull();
  });

  // methods & state manipulations
    it('should update the state to all null when AC is clicked', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: null, next: null, operation: null };
      instance.handleClick('AC');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state next to 0.06 when values are passed to the event handler', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: null, next: '0.06', operation: null };
      instance.handleClick('0');
      instance.handleClick('.');
      instance.handleClick('0');
      instance.handleClick('6');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state next to toggle negative or positive integer', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: null, next: "-3", operation: null };
      instance.handleClick('3');
      instance.handleClick('+/-');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state total to add values to 72.4', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: "72.4", next: null, operation: null };
      instance.handleClick('70');
      instance.handleClick('.');
      instance.handleClick('4');
      instance.handleClick('+');
      instance.handleClick('2');
      instance.handleClick('=');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state total to subtract values to equal -100.15', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: "-100.15", next: null, operation: null };
      instance.handleClick('-70');
      instance.handleClick('+');
      instance.handleClick('-30.15');
      instance.handleClick('=');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state total to divide values to equal 15.42056074766355140187', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: "15.42056074766355140187", next: null, operation: null };
      instance.handleClick('33');
      instance.handleClick('÷');
      instance.handleClick('2.14');
      instance.handleClick('=');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state total to multiply values to equal 79.75', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: "79.75", next: null, operation: null };
      instance.handleClick('55');
      instance.handleClick('x');
      instance.handleClick('1.45');
      instance.handleClick('=');
      expect(instance.state).toEqual(expected);
  });
    it('should update the state total to return the percentage values to equal 3', () => {
      const app = shallow(<App/>);
      const instance = app.instance();
      const expected = { total: "3", next: null, operation: null };
      instance.handleClick('3');
      instance.handleClick('%');
      instance.handleClick('100');
      instance.handleClick('=');
      expect(instance.state).toEqual(expected);
  });

});