import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders w/o crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('gives us ability to set props', () => {
    const wrapper = mount(<Display value="9001" />);
    expect(wrapper.props().value).toBe('9001');
    wrapper.setProps({ value: '10' });
    expect(wrapper.props().value).toBe('10');
  });

  it('shows the value on div', () => {
    const wrapper = mount(<Display value="10" />);
    expect(wrapper.find('.component-display div').text()).toBe('10');
  });
});
