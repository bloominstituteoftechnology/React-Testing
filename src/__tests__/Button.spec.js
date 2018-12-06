import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    shallow(<Button />);
  });

  it('renders a div with a class of component-button...', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div.component-button').length).toBe(1);
    expect(wrapper.find('div.component-button').hasClass('orange')).toBe(false);
    expect(wrapper.find('div.component-button').hasClass('wide')).toBe(false);
  });

  it('executes handleClick function onClick', () => {
    const name = 'Sam';
    let output;
    const handleClick = input => (output = input);

    const wrapper = shallow(<Button name={name} clickHandler={handleClick} />);
    wrapper.find('div.component-button > button').simulate('click');
    expect(output).toBe(name);
  });
});
