import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('is passing the right props', () => {
		const wrapper = shallow(<Button />);

		if (wrapper.props().orange) {
			expect(wrapper.props().orange).toBe('orange')
		}

		if (wrapper.props().wide) {
			expect(wrapper.props().wide).toBe('wide')
		}
	});
		

	it('renders buttun as single div', () => {
		const wrapper = shallow(<Button />);
		const elements = wrapper.find('div');
		 expect(elements.length).toEqual(1);
	});
});

/*
TESTS 
-renders the display
-passing the right props
-renders as 1 div
*/