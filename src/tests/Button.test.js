import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('has one child button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div').children('button')).toHaveLength(1);
  });
  it('should contain a wrapping div named component-button', () => {
    const wrapper = shallow(<Button />);
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('component-button')
    ).toEqual(true);
  });
  it('has a classname of wide when passed the wide prop', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.wide')).toHaveLength(1);
  });
  it('has a classname of orange when passed the orange prop', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.orange')).toHaveLength(1);
  });
  it('fires the clickhandler when clicked and passes in the buttons name', () => {
    const clickHandler = sinon.spy();
    const wrapper = shallow(<Button name="test" clickHandler={clickHandler} />);
    wrapper.find('button').simulate('click');
    expect(clickHandler.calledOnce).toEqual(true);
    expect(clickHandler.calledWith('test')).toEqual(true);
  });
});
