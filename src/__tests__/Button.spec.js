import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('should render without crashing', () => {
		shallow(<Button />);
	}); // should render component without crashing

	it('should render the button', () => {
		const wrapper = shallow(<Button />);
		const button = wrapper.find('button');
		expect(button.length).toBe(1);
	}); // should render the button

	it('should render an orange button', () => {
		const wrapper = shallow(<Button orange />);
		const button = wrapper.find('.orange');
		expect(button.length).toBe(1);
	}); // should render an orange button

	it('should render a wide button', () => {
		const wrapper = shallow(<Button wide />);
		const button = wrapper.find('.wide');
		expect(button.length).toBe(1);
	}); // should render a wide button
});
