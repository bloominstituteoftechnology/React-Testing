import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have total, next, operation in state as default values', () => {
    const wrapper = shallow(<App />);
     expect(wrapper.state('total')).toEqual('0');
    expect(wrapper.state('next')).toBeNull();
    expect(wrapper.state('operation')).toBeNull();
})
 it('should have a handleClick method that updates the state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
     instance.handleClick('1');
     expect(wrapper.state('next')).toEqual('1');
    expect(wrapper.state('total')).toBeNull();
    expect(wrapper.state('operation')).toBeNull();
})
});
