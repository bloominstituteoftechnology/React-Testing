import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should have class name component-display', ()=> {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('.component-display');
		expect(display.length).toBe(1);
	})

	it('should have two divs', ()=> {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('div');
		expect(display.length).toBe(2);
	})
});
