import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';
import Display from '../components/Display/Display'
import Panel from '../components/Panel/Panel'

let wrapper, instance, display, panel;

describe('<App />', () => {
  beforeAll(() => {
    wrapper = (shallow(<App />))
    instance = wrapper.instance(); // To access a component's state and methods
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should shallow render without crashing', () => {
    wrapper;
  })
  it('have a className called "component-app"', () => {
    expect(wrapper.find('.component-app').length).toBe(1);
  })

  describe('<App /> State', () => {
    it("should an App state total of '0'", () => {
      expect(instance.state.total).toBe('0');
    })
    it('should have an App state of next be null', () => {
      expect(instance.state.next).toBeNull();
    })
    it('should have an App state of operation be null', () => {
      expect(instance.state.operation).toBe(null);
    })
  })

  describe('<App /> Children', () => {
    beforeAll(() => {
      wrapper.setState({ total: '1203' });
      display = wrapper.find(Display);
      panel = wrapper.find(Panel);
    })

    it('should have 2 children', () => {
      expect(wrapper.find('div').children()).toHaveLength(2);
    })
    it('should have a Display child', () => {
      expect(display.length).toBe(1);
    })
    it('should have a Panel child', () => {
      expect(panel.length).toBe(1);
    })
    it('should have 1 prop for Display component', () => {
      expect(Object.entries(display.props())).toHaveLength(1);
    })
    it('should have 1 prop for Panel component', () => {
      expect(Object.entries(panel.props())).toHaveLength(1);
    })
    it('should display updated total of 1203 for Display Component', () => {
      expect(display.props().value).toBe('1203');
    })
  })

  describe('<App /> handleClick method', () => {
    beforeEach(() => {
      wrapper.setState({ total: '0', next: null, operation: null });
    })
    it('should change state.next to 123', () => {
      instance.handleClick('1')
      instance.handleClick('2')
      instance.handleClick('3')
      // expect(instance.state.total).toBe(null)
      // expect(instance.state.next).toBe('123')
      // expect(instance.state.operation).toBe(null)
      expect(instance.state).toEqual({ total: null, next: '123', operation: null })
    })
    it('should change state.total to 123 with adding 100+23', () => {
      instance.handleClick('100')
      instance.handleClick('+')
      instance.handleClick('23')
      instance.handleClick('=')
      expect(instance.state).toEqual({ total: '123', next: null, operation: null })
    })
    it('should change state.total to 180 with subtracting 200-20', () => {
      instance.handleClick('200')
      instance.handleClick('-')
      instance.handleClick('20')
      instance.handleClick('=')
      expect(instance.state).toEqual({ total: '180', next: null, operation: null })
    })
    it('should change state.total to 10 with dividing 200÷20', () => {
      instance.handleClick('200')
      instance.handleClick('÷')
      instance.handleClick('20')
      instance.handleClick('=')
      expect(instance.state).toEqual({ total: '10', next: null, operation: null })
    })
    it('should change state.total to 4000 with subtracting 200*20', () => {
      instance.handleClick('200')
      instance.handleClick('x')
      instance.handleClick('20')
      instance.handleClick('=')
      expect(instance.state).toEqual({ total: '4000', next: null, operation: null })
    })
    it('should change state to null is "AC" was selected', () => {
      instance.handleClick('20')
      instance.handleClick('AC')
      expect(instance.state).toEqual({ total: null, next: null, operation: null })
    })
    it('should change numbers to negative when "+/- is selected"', () => {
      instance.handleClick('200')
      instance.handleClick('+/-')
      expect(instance.state).toEqual({ total: null, next: '-200', operation: null })
    })
  })
});

