import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('check for calculator display', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('div.component-display');
		expect(display.length).toBe(1);
	});

});
