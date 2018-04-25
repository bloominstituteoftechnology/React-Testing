import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div').children).toHaveLength(1);
  });
  it('should render with class name "component-button wide" when passed wide', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
    expect(wrapper.find('.wide')).toHaveLength(1);
  });
  it('should render with class name "component-button orange" when passed orange', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.component-button')).toHaveLength(1);
    expect(wrapper.find('.orange')).toHaveLength(1);
  });
  it('should call click event', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Button clickHandler={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy.calledOnce).toEqual(true);
  });
});
