import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Button />, div);
	});

	it('renders a button', () => {
		const wrapper = shallow(<Button />);

		const elements = wrapper.find('button');

		expect(elements.length).toBe(1);
	});

	it('has the class "orange" if props.orange is true', () => {
		const wrapper = shallow(<Button orange />);

		expect(wrapper.find('div').hasClass('orange')).toBe(true);
	});

	it('has the class "orange" if props.orange is true', () => {
		const wrapper = shallow(<Button wide />);

		expect(wrapper.find('div').hasClass('wide')).toBe(true);
	});

	// should call props.clickHandler with the argument props.name on click
	// should probably throw an error when any props are provided with the wrong type of argument
});
