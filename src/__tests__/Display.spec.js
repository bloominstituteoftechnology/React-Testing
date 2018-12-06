import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should render a div with class of component-display', () => {
		const wrapper = shallow(<Display />)
		const display = wrapper.find('div.component-display')
		expect(display.length).toBe(1)
		
	})

	it('value should be an object', () => {
		const wrapper = shallow(<Display />)
		expect(wrapper.find('value')).toEqual({})
	})

});
