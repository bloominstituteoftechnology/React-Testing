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
  it('should have click handler working', () => {
    const click = sinon.spy();
    const wrapper = shallow(<Button name="test" clickHandler={click} />);
    wrapper.find('button').simulate('click');
    expect(click.calledOnce).toEqual(true);
    expect(click.calledWith('test')).toEqual(true);
  });
});