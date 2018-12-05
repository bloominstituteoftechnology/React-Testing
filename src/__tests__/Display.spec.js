import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />)
	})
	it('renders the component display', () => {
		expect(shallow(<Display />).find('div.component-display').length).toBe(1)
	})
	it('displays the value prop', () => {
		const wrapper = shallow(<Display value='0'/>);	
		let display = wrapper.find('div.value');
		expect(display.text()).toBe('0');
	})
})

// default display should be '0'
// props.value should be the display text