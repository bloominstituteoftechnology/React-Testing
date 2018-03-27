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

  it('should render a button component', () => {
    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);
  });

  it('should display the value of the clicked button', () => {
    const component = shallow(<Button name = "7"/>);
    expect(component.props().children.props.children).toEqual('7')
  })
  it('should contain a handleClick function', () => {
    const buttonFunc = sinon.spy();
    const component = shallow(<Button name='clickMe' clickHandler={buttonFunc} />);
    component.find('button').simulate('click');
    expect(buttonFunc.calledOnce).toBeTruthy();
    expect(buttonFunc.calledOnceWith('clickMe')).toEqual(true);
  });
});

