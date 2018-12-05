import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('has a button', () => {
		const wrapper = shallow(<Button />)
		const button = wrapper.find('button')
		expect(button.length).toBe(1)
	})

	it('has a this.props.name object', () => {
		const wrapper = shallow(<Button />)
		expect(wrapper.find('this.props.name')).toEqual({})
	})

	it('has a handleClick function', () => {
		const wrapper = shallow(<Button />)
		expect(wrapper.find('handleClick')).toEqual({})
	})

});
