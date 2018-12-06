import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should display 0', () => {
		const wrapper = shallow(<Display value={'0'} />);
		const instance = wrapper.instance();
		expect(wrapper.find('div.component-display div').text()).toBe('0');
	});

	it('should display 3', () => {
		const wrapper = shallow(<Display value={'3'} />);
		const instance = wrapper.instance();
		expect(wrapper.find('div.component-display div').text()).toBe('3');
	});

	it('should show that there is 1 div w/ classname Component-display', () => {
		const wrapper = shallow(<Display />);
		const instance = wrapper.instance();
		expect(wrapper.find('div.component-display').length).toEqual(1);
	});
});
