import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  
  it('renders without crashing', () => {
  shallow(<Button />);
  });

  it('should return one div', () => {
    const button = shallow(<Button />);

    expect(button.find('div').children()).toHaveLength(1);
  });

  it('should return buttons component', () => {
    const buttons = shallow(<Button />);
    expect(buttons.find('.component-button').exists()).toBeTruthy();
  });

  it('should return orange-button', () => {
    const buttons = shallow(<Button orange/>);
    expect(buttons.find('.orange').exists()).toBeTruthy();
    expect(buttons.find('.component-button').exists()).toBeTruthy();
    expect(buttons.find('.wide').exists()).toBeFalsy();
  });

  it('should return wide-button', () => {
    const buttons = shallow(<Button wide/>);
    expect(buttons.find('.wide').exists()).toBeTruthy();
    expect(buttons.find('.component-button').exists()).toBeTruthy();
    expect(buttons.find('.orange').exists()).toBeFalsy();
  });

  it('Button 1 on click', () => {
    const f = sinon.spy();
    const button = shallow(<Button name='1' clickHandler={f} />);

    button.find('button').simulate('click');
    
    expect(f.calledOnce).toBeTruthy();
    expect(f.calledWith('1')).toBeTruthy();
  });

  it('Button 2 on click', () => {
    const f = sinon.spy();
    const button = shallow(<Button name='2' clickHandler={f} />);

    button.find('button').simulate('click');
    
    expect(f.calledOnce).toBeTruthy();
    expect(f.calledWith('2')).toBeTruthy();
  });

  it('Button 3 on click', () => {
    const f = sinon.spy();
    const button = shallow(<Button name='3' clickHandler={f} />);

    button.find('button').simulate('click');
    
    expect(f.calledOnce).toBeTruthy();
    expect(f.calledWith('3')).toBeTruthy();
  });

  it('Button 4 on click', () => {
    const f = sinon.spy();
    const button = shallow(<Button name='4' clickHandler={f} />);

    button.find('button').simulate('click');
    
    expect(f.calledOnce).toBeTruthy();
    expect(f.calledWith('4')).toBeTruthy();
  });
});
