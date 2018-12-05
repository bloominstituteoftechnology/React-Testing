import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('renders a div with class component display', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div.component-display').length).toBe(1);
	});

	it('renders a child div inside the main div', () => {
		const wrapper = shallow(<Display />);
		const children = wrapper.find('div.component-display').children();
		expect(children.find('div').length).toBe(1);
	});
});
