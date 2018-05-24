import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

it('will render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should  return button ', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
    expect(wrapper.find('.wide').exists()).toBeFalsy();
    expect(wrapper.find('.orange').exists()).toBeFalsy();
  });

  it('successfully returns props.orange, when passed it ', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.orange').exists()).toBeTruthy();
    expect(wrapper.find('.wide').exists()).toBeFalsy();
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
  });

  it('successfully returns props.wide, when passed it ', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.wide').exists()).toBeTruthy();
    expect(wrapper.find('.orange').exists()).toBeFalsy();
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
  });

  it('should fire button prop clickhandler when clicked', () => {
    const clickHandler = jest.fn();
    const button = shallow(<Button clickHandler={clickHandler} />);
    button.children().simulate('click');
    expect(clickHandler.mock.calls.length).toBe(1);
  });

  it('display prop name passed to it', () => {
    const button = shallow(<Button name="hello" />);
    expect(button.text()).toBe("hello");
 });