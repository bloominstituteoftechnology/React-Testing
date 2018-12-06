import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('Sets the click handler to listen to buttons', () => {
    const name = 'click';
    let output;
    function clickHandler(input) {
      output = input;
    }

    const wrapper = shallow(<Button name={name} clickHandler={clickHandler} />);
    const buttonDiv = wrapper.find('.component-button > button');
    buttonDiv.simulate('click');
    expect(output).toBe(name);
  });

  it('recieves class names as props', () => {
    const wrapper = shallow(<Button orange wide />);
    const buttonDiv = wrapper.find('.component-button');
    expect(buttonDiv.hasClass('orange')).toBe(true);
    expect(buttonDiv.hasClass('wide')).toBe(true);
  });
});
