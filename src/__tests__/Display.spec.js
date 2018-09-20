import React from 'react';
import ReactDOM from 'react-dom';
import{ shallow,mount } from 'enzyme';

import Display from '../components/Display/Display';
import App from '../App';
import Panel from '../components/Panel/Panel';

describe('<Display />', () => {
  it('renders without crashing', () => {
   shallow(<Display/>);
  });
  it('renders prop name in div',()=>{
    const wrapper=shallow(<Display value='93'/>);
    const finder=wrapper.find('div');
    expect(finder.last().text()).toBe('93');
  })
  it('renders depending on app state total',()=>{
    const wrapper=mount(
      <App>
        <Display></Display>
        <Panel></Panel>
      </App>
    )
    const display=wrapper.find('.component-display');
    wrapper.find('button').filterWhere(btn=>btn.text()==='9').simulate('click');
    expect(display.text()).toBe('9');
    wrapper.find('button').filterWhere(btn=>btn.text()==='8').simulate('click');
    expect(display.text()).toBe('98');
  })
  it('renders a calculated value',()=>{
    const wrapper=mount(
      <App>
        <Display></Display>
        <Panel></Panel>
      </App>
    )
    const display=wrapper.find('.component-display');
    wrapper.find('button').filterWhere(btn=>btn.text()==='8').simulate('click');
    wrapper.find('button').filterWhere(btn=>btn.text()==='+').simulate('click');
    wrapper.find('button').filterWhere(btn=>btn.text()==='7').simulate('click');
    wrapper.find('button').filterWhere(btn=>btn.text()==='=').simulate('click');
    expect(display.text()).toBe('15');
  })
});
