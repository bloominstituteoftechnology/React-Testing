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
  it('should have total, operation, and next on state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBeDefined();
    expect(wrapper.state('next')).toBeDefined();
    expect(wrapper.state('operation')).toBeDefined();
  });
  it('should contain a handleClick to update the state', () => {
    const wrapper = shallow(<App />);
    const inst = wrapper.instance();
    inst.handleClick('1');
    expect(wrapper.state('next')).toEqual('1');
    expect(wrapper.state('total')).toEqual('0');
    expect(wrapper.state('operation')).toBeNull();
  });
});
