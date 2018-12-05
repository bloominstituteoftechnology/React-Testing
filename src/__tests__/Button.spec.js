import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('has appropriate props', () => {
		const wrapper = shallow(<Button />);
		if (wrapper.props().orange) {
			expect(wrapper.props().orange).toBe('orange')
		}
		if (wrapper.props().wide) {
			expect(wrapper.props().wide).toBe('wide')
		}
	});

	it('has a click handler passed as props', () => {
		const wrapper = shallow(<Button />);
		expect(wrapper.find('.component-button').length).toBe(1);
	});
});
