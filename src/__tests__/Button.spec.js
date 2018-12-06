import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders shallow without crashing', () => {
	  shallow(<Button />);
	});
	it('renders div with orange', () => {
	  const wrapper = shallow(<Button orange />);
	  const buttons = wrapper.find('.orange');
  
	  expect(buttons.length).toBe(1);
	});
	it('renders div with wide', () => {
	  const wrapper = shallow(<Button wide />);
	  const buttons = wrapper.find('.wide');
  
	  expect(buttons.length).toBe(1);
	});
	it('renders button with prop name', () => {
	  const wrapper = shallow(<Button name="abcd" />);
	  const buttons = wrapper.find('button');
  
	  expect(buttons.text()).toBe('abcd');
	});
  });
