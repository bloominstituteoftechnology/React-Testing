import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from '../App';
import Display from '../components/Display/Display'
import Panel from '../components/Panel/Panel'

const wrapper = (shallow(<App />))
const instance = wrapper.instance();

describe('<App />', () => {
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
  it('have a className called component-app', () => {
    const elements = wrapper.find('.component-app');
    expect(elements.length).toBe(1);
  })
  it("should an App state total of '0'", () => {
    expect(instance.state.total).toBe('0');
  })
  it('should have an App state of next be null', () => {
    expect(instance.state.next).toBe(null);
  })
  it('should have an App state of operation be null', () => {
    expect(instance.state.operation).toBe(null);
  })
});

describe('<App /> children', () => {
  beforeAll(() => {
    wrapper.setState({ total: '1203' })
  })

  it('should have 2 children', () => {
    expect(wrapper.find('div').children()).toHaveLength(2);
  })
  it('should have a Display child', () => {
    expect(wrapper.find(Display).length).toBe(1);
  })
  it('should have 1 prop for Display component', () => {
    expect(Object.entries(wrapper.find(Display).props())).toHaveLength(1);
  })
  it('should display total for Display Component of 1203', () => {
    expect(wrapper.find(Display).props().value).toBe('1203');
  })
  it('should have a Panel child', () => {
    expect(wrapper.find(Panel).length).toBe(1);
  })
  it('should have 1 prop for Panel component', () => {
    expect(Object.entries(wrapper.find(Panel).props())).toHaveLength(1);
  })
})