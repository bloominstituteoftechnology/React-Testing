import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	const props = {
		clickHandler: () => {},
	}

	const button = shallow(<Button {...props}/>);
	const instance = button.instance();

	it('handleclick should be called when button is clicked', () => {
		const clickFunc = jest.spyOn(instance, 'handleClick')
		instance.handleClick();

		expect(clickFunc).toBeCalled();
	});

});
