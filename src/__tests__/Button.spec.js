import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 
import Button from '../components/Button/Button';

function wrapperFunc () {
  const wrapper = shallow(<Button />);
  const instance = wrapper.instance(); 
  return instance; 
}

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });
  it('handleClick is a function', () => {
    expect(typeof wrapperFunc().handleClick).toEqual('function');
  });

});
