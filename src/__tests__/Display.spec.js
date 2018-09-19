import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Display value="897987" />);
    expect(wrapper.props().value).toBe('897987');
    wrapper.setProps({ value: '123' });
    expect(wrapper.props().value).toBe('123');
  });

  it('displays the value on the div', () => {
    const wrapper = mount(<Display value="123" />);
    expect(wrapper.find('.component-display div').text()).toBe('123');
  });
});
