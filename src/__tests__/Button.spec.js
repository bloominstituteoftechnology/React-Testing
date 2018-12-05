import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should render as `component-button orange` when passed props.orange', () => {
		const wrapper = shallow(<Button orange/>);
		expect(wrapper.find('.orange').length).toBe(1);
	});

	it('should render as `component-button wide` when passed props.wide', () => {
		const wrapper = shallow(<Button wide/>);
		expect(wrapper.find('.wide').length).toBe(1);
	})
});
