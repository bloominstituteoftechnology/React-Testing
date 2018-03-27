import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Panel from '../components/Panel/Panel';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('should have handleClick function', () => {
    const wrapper = shallow(<Button />)
    expect(typeof(wrapper.instance().handleClick)).toBe('function');
  });
  it('triggers handleClick on click', () => {
    const buttonClick = sinon.spy();
    const wrapper = shallow(<Button clickHandler={buttonClick}/>);
    wrapper.find('button').simulate('click');
    expect(buttonClick.calledOnce).toBeTruthy();
  });
  it('has the class "orange" passed from props', () => {
    const wrapper = shallow(<Button clickHandler={()=>{}} orange />);
    expect(wrapper.find('.orange')).toBeDefined();
  });
  it('passes the name from props to inner html on the button', () => {
    const wrapper = shallow(<Button clickHandler={()=>{}} name='+' />);
    expect(wrapper.text()).toEqual('+');
  });
});