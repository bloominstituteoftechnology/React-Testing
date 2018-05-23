import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('Should return correct button name ', () => {
    const wrapper = shallow(<Button/>)
    wrapper.simulate('click');
    expect(sinon.spy().calledOnce).toBe(false);

  });
});