import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should render a button with a clickhandler', () => {
		const wrapper = shallow(<Button />);
		const button = wrapper.find('button');
		expect(button.prop('onClick')).toBeTruthy();
	})

});
