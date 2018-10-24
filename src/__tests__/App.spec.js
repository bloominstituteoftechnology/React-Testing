import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';


describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('should render a div with the component-app class', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('div.component-app');
    expect(elements.length).toBe(1);
  });

  it('should have a default state of total: 0, next: null, and operation: null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toBe('0');
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  });

});
