import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests.js';

// Components
import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('renders a div with a "component-display" class', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div.component-display').length).toBe(1);
	});

	it('renders another div with class "value" inside the "component-display" class div', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div.component-display>div').length).toBe(1);
	});

	describe('Display props', () => {
		it('should render a 0 inside the "value" class div', () => {
			const wrapper = shallow(<Display value = '0' />);
			expect(wrapper.find('div.value').text()).toBe('0');
		});

		it('should render a -23 inside the "value" class div', () => {
			const wrapper = shallow(<Display value = '-23' />);
			expect(wrapper.find('div.value').text()).toBe('-23');
		});
	});
});