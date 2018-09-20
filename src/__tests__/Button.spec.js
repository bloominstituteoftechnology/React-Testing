import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';


describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button/>);
  });
  it('renders button with orange',()=>{
    const wrapper=shallow(<Button orange/>);
    const buttons=wrapper.find('.orange');
    expect(buttons.length).toBe(1);
  })
  it('renders button with wide',()=>{
    const wrapper=shallow(<Button wide/>);
    const buttons=wrapper.find('.wide');
    expect(buttons.length).toBe(1);
  })
  it('renders button with prop name',()=>{
    const wrapper=shallow(<Button name='Prudence'/>)
    const buttons=wrapper.find('button');
    expect(buttons.length).toBe(1);
  })
});
