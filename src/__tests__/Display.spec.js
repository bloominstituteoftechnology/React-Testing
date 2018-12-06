import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should have a div with className `component-display', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('.component-display').length).toBe(1);
	});

	it('should return a value', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.contains(
			<div>
				
			</div>
		))
	})
});
