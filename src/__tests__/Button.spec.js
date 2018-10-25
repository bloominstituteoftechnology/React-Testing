import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });
  it('should return props', () => {
    const renderMock = jest.fn();
    const wrapper = shallow(<Button render={renderMock} />);

    expect(wrapper.props()).toBeDefined();
  });
  it('should return class property', () => {
    const wrapper = shallow(<Button orange />);
    const elements = wrapper.find('.orange');

    expect(elements.length).toEqual(1);
  });
  it('should return true', () => {
    const func = sinon.spy();
    const wrapper = shallow(<Button name="6" clickHandler={func} />);
    wrapper.find('button').simulate('click');

    expect(func.calledOnce).toEqual(true);
    expect(func.calledWith('6')).toEqual(true);
  });
});
