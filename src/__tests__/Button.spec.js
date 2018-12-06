import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should set the div className correctly based on props', () => {
		const mock = jest.fn()
		const buttonWrapper = shallow(<Button clickHandler={mock} orange wide/>);
		const button = buttonWrapper.find('div');
		expect(button.hasClass('component-button')).toBe(true)
		expect(button.hasClass('orange')).toBe(true)
		expect(button.hasClass('wide')).toBe(true)
	})

	it('should call handleclick when clicked', () => {
		const mock = jest.fn()
		const buttonWrapper = shallow(<Button clickHandler={mock}/>)
		const button = buttonWrapper.find('button');
		button.simulate('click')
		expect(mock).toHaveBeenCalledTimes(1)
		button.simulate('click')
		expect(mock).toHaveBeenCalledTimes(2)
	})

	it('should have the correct button name displayed', () => {
		const props = {
			name: '9'
		}
		const buttonWrapper = shallow(<Button {...props}/>)
		const button = buttonWrapper.find('button');
		expect(button.text()).toEqual('9');
	})
});