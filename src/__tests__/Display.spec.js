import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('renders div with component-display class', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div.component-display').length).toBe(1);
	});

	it('renders div within div', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div.component-display').children().find('div').length).toBe(1);
	});

	it('displays value prop', () => {
		const wrapper = shallow(<Display value='hello' />);
		let display = wrapper.find('div.component-display');
		expect(display.text()).toBe('hello');
	});
});
