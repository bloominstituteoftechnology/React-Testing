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

  it('can set props', () => {
    const wrapper = mount(<Display value="8"/>);
    expect(wrapper.props().value).toBe('8');
  });

  it('displays the value', ()=> {
    const wrapper = mount(<Display value="0"/>)
    const display = wrapper.find('.component-display div');
    expect(display.text()).toEqual('0');
  })
});
