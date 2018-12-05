import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('renders a div with className "component-display"', () => {
		const wrapper = shallow(<Display />);

		expect(wrapper.find('div.component-display').length).toBe(1)
	});

	it('the component display should have one child element', () => {
		const wrapper = shallow(<Display />);

		const children = wrapper.find('div.component-display').children();

		expect(children.find('div').length).toBe(1)
	});

});

/* 
TESTS
-renders a div with calssName 'Component-display"
-the component display should have one child element
*/
