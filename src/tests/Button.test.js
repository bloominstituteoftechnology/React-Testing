import React from 'react';
import ReactDOM from 'react-dom';
//import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button ', () => {
  const clicks = jest.fn();
  const component = shallow(<Button clickHandler={clicks} />);
  
  it('should invoke', () => {
    component.find('button').simulate('click');
    component.find('button').simulate('click');
    expect(clicks).toHaveBeenCalledTimes(2);
  });
  
});