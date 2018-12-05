import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should render orange buttons', () => {
		const props = { orange: true}
		const button = shallow(<Button {...props}/>);
		const buttonDisplay = button.find('.component-buttonorange');
		expect(buttonDisplay.length).toEqual(1);
	})

	it('should render correct number of wide buttons', () => {
		
	})
});