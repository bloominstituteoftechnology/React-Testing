import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should render a div class with component-app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.component-app')).toHaveLength(1);
  });
  it('should render class Display', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Display')).toHaveLength(1);
  });
  it('should render class Panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Panel')).toHaveLength(1);
  });
  it('should have a "handleClick" method that updates state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('9');
    expect(wrapper.state('next')).toEqual('9');
    expect(wrapper.state('total')).toBeNull();
    expect(wrapper.state('operation')).toBeNull();
  });
});
