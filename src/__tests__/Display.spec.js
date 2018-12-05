import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('display rendered', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('.component-display');
		expect(display.length).toBe(1);
	});
	
 	it('displays prop', () => {
		const wrapper = shallow(<Display value='test' />);
		const displayed = wrapper.find('.component-display > div');
		expect(displayed.text()).toBe('test');
	});
});
