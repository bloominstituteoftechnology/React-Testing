import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';
import App from '../App';
import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    shallow(<Display />);
  });
  it('renders prop name in div', () => {
    const wrapper = shallow(<Display value="abcd" />);
    const finder = wrapper.find('div');
     expect(finder.last().text()).toBe('abcd');
  });
  it('renders prop name in div', () => {
    const wrapper = shallow(<Display value="abcd" />);
    const finder = wrapper.find('.component-display');
     expect(finder.last().text()).toBe('abcd');
  });
  it('renders depending on App state', () => {
    const wrapper = mount(
      <App>
        <Display />
        <Panel />
      </App>
    );
    const disp = wrapper.find('.component-display');
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '7')
      .simulate('click');
    expect(disp.text()).toBe('7');
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '9')
      .simulate('click');
    expect(disp.text()).toBe('79');
  });
  it('renders calculated value', () => {
    const wrapper = mount(
      <App>
        <Display />
        <Panel />
      </App>
    );
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
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '-')
      .simulate('click');
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '6')
      .simulate('click');
    wrapper
      .find('button')
      .filterWhere(btn => btn.text() === '=')
      .simulate('click');
    expect(disp.text()).toBe('10');
  });
});
