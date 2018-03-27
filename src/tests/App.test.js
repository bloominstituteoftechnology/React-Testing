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
  it('is it null', () => {
    const wrapper = shallow(<App />)
    const currState = wrapper.state().total
    expect(currState).toEqual(null)
  });
  it('handleClick should be functioning', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleClick('1');
    expect(wrapper.state('next')).toEqual('1');
  });
  it('state is defined', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBeDefined();
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined();
  })
});
