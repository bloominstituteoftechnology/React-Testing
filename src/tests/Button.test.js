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
  it('renders without crashing, checking with wrapper', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveLength(1);
  });
  it('should call a click function once per click', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Button clickHandler={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy.calledOnce).toEqual(true);
  });
});
