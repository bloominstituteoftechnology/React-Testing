import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('has handleClick function', () => {
		const wrapper = shallow(<Button />);
		const instance = wrapper.instance().handleClick;
		expect(instance).toBeInstanceOf(Function);
	});

	it('has a click handler passed as props', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('.component-button').length).toBe(1);
	});
});
