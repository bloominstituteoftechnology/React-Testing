import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should have a div with the classname: component-button', () => {
		const wrapper = shallow(<Button />)
		expect(wrapper.find('.component-button').exists()).toBe(true)
	  });
	  it('should have a classnames wide and orange if passed as props', () => {
		const buttonOrange = shallow(<Button orange />)
		const buttonWide = shallow(<Button wide />)
		const button = shallow(<Button />)
	   
		expect(buttonWide.find('.wide').exists()).toBe(true)
		expect(buttonOrange.find('.orange').exists()).toBe(true)
		expect(button.find('.wide').exists()).toBe(false)
		expect(button.find('.orange').exists()).toBe(false)
	  });
});
