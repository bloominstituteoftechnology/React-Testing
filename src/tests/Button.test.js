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
  it('should call handleClick when clicked', () => {
    const handleClick = sinon.spy();
    const wrapper = shallow(<Button clickHandler={handleClick} />);
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).toEqual(true);
  });
  it('should take styling of `orange` class when it is passed to the button', () => {
    const wrapper = shallow(<Button orange />);
    expect(wrapper.find('.orange')).toHaveLength(1);
  });
  it('should take styling of `wide` class when it is passed to the button', () => {
    const wrapper = shallow(<Button wide />);
    expect(wrapper.find('.wide')).toHaveLength(1);
  });
});
