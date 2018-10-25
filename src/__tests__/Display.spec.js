import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	// this *appears* to work as expected. API docs had a weird example with a <div>, so IDK.
	it('props.value should be a numeric string', () => {
		const wrapper = shallow(<App />);
		const element = wrapper.find('Display');
		expect(element.prop('value')).toMatch(/[0-9]+/);
	});

	it('should display a numerical string', () => {
		const wrapper = shallow(<App />);
		const elements = wrapper
			.find('Display')
			.dive()
			.find('div')
			.not('div.component-display');

		expect(elements.text()).toMatch(/[0-9]+/);
	});
});
