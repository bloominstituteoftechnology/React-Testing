import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';


Enzyme.configure({ adapter: new Adapter() });

describe.skip('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have `total`, `next`, and `operation` in state', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper.state('total')).toEqual('0');
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined();
  });

  it('should have `handleClick` method that updates state when clicked', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleClick('5');

    expect(wrapper.state('total')).toBeNull();
    expect(wrapper.state('next')).toEqual('5');
    expect(wrapper.state('operation')).toBeNull();
  });

  it('should have className `component-app` within a div', () => {
    const wrapper = shallow(<App />);

    const elements = wrapper.find('div.component-app');

    expect(elements.length).toBe(1); 
  });

});
