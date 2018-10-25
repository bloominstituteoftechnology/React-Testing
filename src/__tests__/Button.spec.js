import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should have a single button', () => {
		const wrapper = shallow(<Button />);
		const btn = wrapper.find('button');

		expect(btn).toHaveLength(1);
	});

	it('should have props called "name" and "clickHandler"', () => {
		const wrapper = mount(<App />);
		const btn = wrapper.find('Button').at(0);

		expect(btn.prop('name')).toMatch(/^AC$/);
		expect(btn.prop('clickHandler')).toHaveLength(1);
	});

	// thank you Ezra!
	it('value of state key "next" should be "7"', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		const button = wrapper
			.find('Panel')
			.dive()
			.find('Button')
			.at(4)
			.dive()
			.find('button');
		button.simulate('click');
		expect(instance.state.next).toMatch(/7/);
	});
});
