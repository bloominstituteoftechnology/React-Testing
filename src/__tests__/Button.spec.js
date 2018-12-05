import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
});

it('renders with component button class if no display props are passed to it', () => {
	const wrapper = shallow(<Button />);
	const buttonDiv = wrapper.find('.component-button');
	expect(buttonDiv.hasClass('orange')).toBe(false);
	expect(buttonDiv.hasClass('wide')).toBe(false);
});
it('executes clickHandler', () => {
	const name = 'testClick';
	let output;
	function clickHandler(input) {
		output = input;
	};
	const wrapper = shallow(<Button name={name} clickHandler={clickHandler} />);
	const buttonDiv = wrapper.find('.component-button > button');
	buttonDiv.simulate('click');
	expect(output).toBe(name);
});
it('receives class name as props', () => {
	const wrapper = shallow(<Button orange wide />);
	const buttonDiv = wrapper.find('.component-button');
	expect(buttonDiv.hasClass('orange')).toBe(true);
	expect(buttonDiv.hasClass('wide')).toBe(true);
});