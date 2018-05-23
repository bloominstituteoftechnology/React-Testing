import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const wrapper = shallow(<Button name='hello world' clickHandler={() => {wrapper.setProps({name:'hello'})}}/>);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('return one child',()=>{
    expect(wrapper).toHaveLength(1);
  })
  it ('test', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().props.name).toBe('hello');
  })
});