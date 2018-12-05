import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />)
	})
	it('displays the value of its name prop', () => {
		const wrapper = shallow(<Button name='do math'/>)
		const button = wrapper.find('button')
		expect(button.text()).toBe('do math')
	})
	it('has component-button default class', () => {
		const wrapper = shallow(<Button />)
		const button = wrapper.find('div')
		expect(button.hasClass('component-button')).toBe(true)
	})
	it('add classes from props', () => {
		const wrapper = shallow(<Button wide orange/>)
		const button = wrapper.find('div')
		expect(button.hasClass('wide')).toBe(true)
		expect(button.hasClass('orange')).toBe(true)
	})
})