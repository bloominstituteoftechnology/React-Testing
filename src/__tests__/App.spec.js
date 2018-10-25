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
    instance = wrapper.instance();
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
});

