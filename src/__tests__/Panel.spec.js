import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button/Button.js'
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('button component is there', () => {
		const wrapper = shallow(<Panel />)
		const button = wrapper.find(<Button />)

		expect(button).toEqual({})
	})

	it('renders a div with class of component-panel', () => {
		const wrapper = shallow(<Panel />)
		const panel = wrapper.find('div.component-panel')
		expect(panel.length).toEqual(1)
	})

	it('has handleClick function', () => {
		const wrapper = shallow(<Panel />)
		const handleClick = wrapper.find('handleClick()')
	
		expect(handleClick).toEqual({})
	})

});
