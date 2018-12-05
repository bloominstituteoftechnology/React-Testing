import React from 'react';
import { shallow,mount } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('Displays correctly when props change', () => {
		const wrapper = mount(<Display value="0" />);
		expect(wrapper.props().value).toBe('0');
		wrapper.setProps({ value: '123' });
		expect(wrapper.props().value).toBe('123');
	});
});
