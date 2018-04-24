import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';
//import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  // it("should pass name 'James' as props", () => {
  //   const wrapper = mount(<Button name={'James'} />);
  //   expect(wrapper.props().name).to.equal('James');
  // });
  it('2nd test for rendering properly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('div').children());
  });
  it('should have one child', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div').children()).toHaveLength(1);
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    const wrapper = mount(<Button clickHandler={onClick} />);
    wrapper.find('button').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });

  // it('should simulate click', () => {
  //   const wrapper = shallow(<Button />);
  //   expect(wrapper.find('button').prop('onClick')());
  // });
  // it('should update count on state when button is clicked', () => {
  //   const wrapper = shallow(<Button />);
  //   console.log(wrapper.state());
  //   expect(wrapper.find('button').simulate('click'));
  //   expect(wrapper.state().count).toEqual(1);
  //   console.log(wrapper.state());
  // });
});
