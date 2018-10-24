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

  // test that calculator initializes with 0 value
  it('calculator should have a default value of 0', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(instance.state.total).toEqual('0');
  })

  // test that Display is rendering
  it('should render Display component', () => {
    const wrapper = shallow(<App />);
    const elements = wrapper.find('Display');
    expect(elements.length).toBe(1);
  })

  // test that Panel is rendering
  it('should render Panel component', () => {
    const wrapper = shallow(<App/>);
    const elements = wrapper.find('Panel');
    expect(elements.length).toBe(1);
  })

});
