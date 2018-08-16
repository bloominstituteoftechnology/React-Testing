import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should render with a class of component-app', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.component-app')).toHaveLength(1);
  });

  it('should have `total`, `next`, and `operation` in state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toEqual("0");
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined(); 
  });

  //! Math operation 5 + 8 = 13 and clear all
  it('should change state.next to 5', () => {
    const instance = wrapper.instance();
    instance.handleClick("5");
    expect(instance.state.next).toBe("5");
  })

  it('should change state.operation to +', () => {
    const instance = wrapper.instance();
    instance.handleClick("+");
    expect(instance.state.operation).toBe("+");
  })

  it('should change state.next to 8', () => {
    const instance = wrapper.instance();
    instance.handleClick("8");
    expect(instance.state.next).toBe("8");
  })

  it('should change state.total to 13', () => {
    const instance = wrapper.instance();
    instance.handleClick("=");
    expect(instance.state.total).toBe("13");
  })

  it('should change state.total, state.next, state.operation to null', () => {
    const instance = wrapper.instance();
    instance.handleClick("AC");
    expect(instance.state.total).toBe(null);
    expect(instance.state.next).toBe(null);
    expect(instance.state.operation).toBe(null);
  })
 //! end Math operation 5 + 8 = 13 and clear all

});
