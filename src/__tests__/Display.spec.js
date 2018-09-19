import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Panel from '../components/Panel/Panel';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('shallow renders without crashing',  () => {
    shallow(<Display />);
  });
  it('renders prop name in div', () => {
    const wrapper = shallow(<Display value='abcd' />);
    const finder = wrapper.find('.component-display');
    expect(finder.text()).toBe('abcd');
  });
  it('checks the function of a button', () => {
    const wrapper = mount(<App><Display /><Panel /></App>);
      wrapper
        .find('button')
        .filterWhere(btn => btn.text() === '7')
        .simulate('click');
      const disp = wrapper.find('.component-display')
      expect(disp.text()).toBe('7');
      wrapper
        .find('button')
        .filterWhere(btn => btn.text() === '9')
        .simulate('click');
      expect(disp.text()).toBe('79');
  });
  it('checks calculator function', () => {
    const wrapper = mount(<App><Display /><Panel /></App>);
    const disp = wrapper.find('.component-display');
      wrapper
        .find('button')
        .filterWhere(btn => btn.text() === '7')
        .simulate('click');
      expect(disp.text()).toBe('7');
      wrapper
        .find('button')
        .filterWhere(btn => btn.text() === '+')
        .simulate('click');
      wrapper
        .find('button')
        .filterWhere(btn => btn.text() === '9')
        .simulate('click');
      wrapper
        .find('button')
        .filterWhere(btn => btn.text() === '=')
        .simulate('click');
      expect(disp.text()).toBe('16');
  });
});
