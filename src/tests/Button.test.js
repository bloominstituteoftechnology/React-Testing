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
  // it('button clicks', () => {
  //   const func = sinon.spy();
  //   const wrapper = shallow(<Button name="kara" onClick={func} />);
  //   wrapper.find('button').simulate('click');
  //   // wrapper.find('button').prop('onClick');
  //   // wrapper.find('button').prop('onClick');

  //   console.log(wrapper.state());
  //   expect(wrapper.state().count).toEqual(5);
  // });
  it('should call click event', () => {
    const func = sinon.spy();
    const component = shallow(<Button clickHandler={func} />);
    component.find('button').simulate('click');
    expect(func.calledOnce).toEqual(true);
  });
});
