import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import calculate from '../logic/calculate.js';

import App from '../App';

jest.mock('../logic/calculate.js');

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should pass the total to Display if next is null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    wrapper.setState({ next: null, total: '7' });

    const elements = wrapper.find({ value: instance.state.total });

    expect(elements.length).toBe(1);
  });

  it('should pass "0" to Display if next and total are null', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    wrapper.setState({ next: null, total: null });

    const elements = wrapper.find({ value: '0' });

    expect(elements.length).toBe(1);
  });

  it('handleClick should calls calculate exactly once passing state and button name', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const stateObject = { total: '3' };
    instance.setState(stateObject);

    instance.handleClick('add');

    expect(calculate).toHaveBeenCalledTimes(1);
    expect(calculate).toHaveBeenCalledWith(instance.state, 'add');
    instance.handleClick('total');
    expect(calculate).toHaveBeenCalledWith(instance.state, 'total');
  });
});