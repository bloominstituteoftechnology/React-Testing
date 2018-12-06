import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('renders a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toBe(1)
	});


	test('test button calls clickHandler for digit buttons when clicked', () => {
		const mockFunction = jest.fn();
		const wrapper = shallow(<Button clickHandler={mockFunction} name={'7'}/>);
		const button = wrapper.find('button');
		button.simulate('click');
		expect(mockFunction).toHaveBeenCalledTimes(1);
		button.simulate('click');
		expect(mockFunction).toHaveBeenCalledTimes(2);
    expect(mockFunction.mock.calls.length).toBe(2);
    expect(mockFunction.mock.calls).toEqual([['7'], ['7']]);
	});

	test('test button calls clickHandler for action buttons when clicked', () => {
		const mockFunction = jest.fn();
		const wrapper = shallow(<Button orange clickHandler={mockFunction} name={'+'}/>);
		const button = wrapper.find('button');
		button.simulate('click');
		expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction.mock.calls.length).toBe(1);
    expect(mockFunction.mock.calls).toEqual([['+']]);
	});

	it('renders a button with a div with a component-button class', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div.component-button').length).toBe(1)
	});

	it('renders a button that changes its name to orange', () => {
    const wrapper = shallow(<Button orange/>);
		expect(wrapper.find('div.orange').length).toBe(1)
		// expect(wrapper.find('div.orange').name).toBe(1)
	});
});