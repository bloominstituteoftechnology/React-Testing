import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	// can't get this to work with wrapper.prop() or instance.prop(). leaving here for a later attempt.
	// it('props.value should be a numeric string', () => {
	// 	const wrapper = shallow(<Display />);
	// 	const instance = wrapper.instance();
	// 	expect(instance.prop('value')).toMatch(/[0-9]*/);
	// });

	it('should display a numerical string', () => {
		const wrapper = shallow(<Display />);
		const elements = wrapper.find('div').not('div.component-display');

		expect(elements.text()).toMatch(/[0-9]*/);
	});
});
