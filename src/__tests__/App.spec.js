import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('should return an object', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.state).toBeInstanceOf(Object);
  });
  it('should return a value', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ next: '5' });
    const instance = wrapper.instance();

    expect(instance.state.next).toBe('5');
  });

  it('should return undefined', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance.handleClick('8')).toBe(undefined);
  });
  it('should return the component-app class', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('.component-app');

    expect(elements.length).toEqual(1);
  });
  it('should return true', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.equals(<div className="component-app"></div>));
  });
  it('should return a Display component', () => {
    const wrapper = mount(<App />);
    const elements = wrapper.find('Display');
    
    expect(elements.length).toEqual(1);
  });
});
