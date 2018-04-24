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
  it('should have a class component-button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass('component-button')).toEqual(true);
  });
  it('calls the handleClick function on click', () => {
    const monkey = sinon.spy();
    const button = shallow(<Button clickHandler={monkey}/>);
    button.find('button').simulate('click');
    expect(monkey.calledOnce).toEqual(true);
  })
});