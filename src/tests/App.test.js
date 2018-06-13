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
  it('contains nested components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('Display')).toHaveLength(1);
    expect(wrapper.find('Panel')).toHaveLength(1);
  });
  it('should have the correct initial state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toEqual('0');
    expect(wrapper.state('next')).toEqual(null);
    expect(wrapper.state('operation')).toEqual(null);
  });
});
