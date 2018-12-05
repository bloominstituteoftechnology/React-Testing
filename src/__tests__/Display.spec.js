import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});
	it('div has class of component-display', () => {
		const wrapper = shallow(<Display />)
		const componentDisplay = wrapper.find('div.component-display');
		expect(componentDisplay.length).toBe(1);
	});
	it('Value display changes dynamically', () => {
		const wrapper = shallow(<Display value={'4'} />);
		const newValue = wrapper.find('div.component-display div');
		expect(newValue.text()).toBe('4');
	});
	
});
