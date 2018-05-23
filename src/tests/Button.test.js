import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const wrapper = shallow(<Button />);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should click', () => {
    const myFunction = jest.fn();
    const wrapper = shallow(<Button clickHandler={myFunction} />);

    wrapper.find('button').simulate('click'); // same as above
    wrapper.find('button').simulate('click');
    expect(myFunction).toHaveBeenCalledTimes(2);
    // expect(wrapper.state().count).toEqual(2);
  });

  it('should  return component-button ', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
    expect(wrapper.find('.wide').exists()).toBeFalsy();
    expect(wrapper.find('.orange').exists()).toBeFalsy();
  });

  it('should  return props.orange ', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.orange').exists()).toBeTruthy();
    expect(wrapper.find('.wide').exists()).toBeFalsy();
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
  });

  it('should  return props.wide ', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.wide').exists()).toBeTruthy();
    expect(wrapper.find('.orange').exists()).toBeFalsy();
    expect(wrapper.find('.component-button').exists()).toBeTruthy();
  });
});
