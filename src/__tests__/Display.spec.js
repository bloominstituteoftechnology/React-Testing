import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should render div with className component-display', () => {
		const wrapper = shallow(<Display />)
		expect(wrapper.find('div.component-display').length).toBe(1)
	})

	it('should render two divs', () => {
		const wrapper = shallow(<Display />)
		const display = wrapper.find('div')
		expect(display.length).toBe(2)
	})

	it('value prop being interpolated for the display should default to ""', () => {
		const wrapper = shallow(<Display />)
		const display = wrapper.find('div.valueDiv')
		expect(display.text()).toBe('')
	})

});
