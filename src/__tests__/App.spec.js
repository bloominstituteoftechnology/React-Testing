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

  it('should default to a total of 0', () => {
    const wrapper = shallow(<App />); 
    const instance = wrapper.instance(); 

    expect(instance.state.total).toEqual('0');
  });

  it('should default to a next of null', () => {
    const wrapper = shallow(<App />); 
    const instance = wrapper.instance(); 

    expect(instance.state.next).toEqual(null);
  });

  it('should default to an operation of null', () => {
    const wrapper = shallow(<App />); 
    const instance = wrapper.instance(); 

    expect(instance.state.operation).toEqual(null);
  });

});
