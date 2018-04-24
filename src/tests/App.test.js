import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should have two children siblings', () => {
    expect(wrapper.find('div').children()).toHaveLength(2);
  });

  it('should include all properties for the state', () => {
    expect(wrapper.state('total')).toBeDefined();
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined();
  });

  it('should have default states set', () => {
    // expect(wrapper.state().total).toEqual("0");
    expect(wrapper.state('total')).toEqual('0');
    expect(wrapper.state().next).toBeNull();
    expect(wrapper.state().operation).toBeNull();
  });

  it('should have a handleClick that passes in button name', () => {
    const inst = wrapper.instance().handleClick('1');
    expect(wrapper.state().next).toEqual('1');
    expect(wrapper.state().total).toEqual('0');
    expect(wrapper.state().operation).toBeNull();
  });
});
