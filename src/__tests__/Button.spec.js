import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it("should have a div with classname component-button", () => {
		const wrapper = shallow(<Button/>);
		const div = wrapper.find(".component-button");
		expect(div.exists()).toBe(true);
	});

	it("should render with a different class based on props", () => {
		let wrapper = shallow(<Button/>);

		expect(wrapper.find(".orange").exists()).toBe(false);
		expect(wrapper.find(".wide").exists()).toBe(false);
		wrapper = shallow(<Button wide />);
		expect(wrapper.find(".wide").exists()).toBe(true);
		wrapper = shallow(<Button orange />);
		expect(wrapper.find(".orange").exists()).toBe(true);
	});
});
