import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';
import { string } from 'postcss-selector-parser';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should only have one component button', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('.component-button').length).toBe(1);
	});

	describe('Classname passed as props', () => {
		it('should have orange, wide, and name as classname passed as props', () => {
			const buttonWide = shallow(<Button wide />);
			const buttonOrange = shallow(<Button orange />);
			const button = shallow(<Button />);

			expect(buttonWide.find('.wide').exists()).toBe(true);
			expect(buttonOrange.find('.orange').exists()).toBe(true);
			expect(button.find('wide').exists()).toBe(false);
		});
	});

	it("should have 1 children", () => {
		const wrapper = shallow(<Button />);
		const instance = wrapper.instance();
		expect(wrapper.children().length).toBe(1);
	});

});
