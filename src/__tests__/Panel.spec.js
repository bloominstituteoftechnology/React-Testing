import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('should render a div with className component-panel', () => {
		const wrapper = shallow(<Panel />);
		const display = wrapper.find('div.component-panel')
		expect(display.length).toBe(1)
	})
	it('should render 19 Button components', () => {
		const wrapper = shallow(<Panel />);
		const display = wrapper.find('Button')
		expect(display.length).toBe(19)
	})
	it('should be passing name prop of "AC" to specified button.', () => {
		const wrapper = shallow(<Panel />);
		const display = wrapper.find({name: 'AC'})
		expect(display.prop('name')).toBe('AC')
	})


});
