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
  it('should shallow render without crashing', () => {
    shallow(<App />);
  });
  it('should check the default state values', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('total')).toBe('0');
    expect(wrapper.state('next')).toBe(null);
    expect(wrapper.state('operation')).toBe(null);
  });
});
