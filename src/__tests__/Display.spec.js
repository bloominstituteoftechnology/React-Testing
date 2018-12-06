import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it("renders a div with appropriate className", () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find("div.component-display");
		expect(display.length).toBe(1);
	});

	it("displays the string passed in the value prop", () => {
		const wrapper = shallow(<Display value="test" />);
		const display = wrapper.find(".component-display > div");
		expect(display.text()).toBe("test");
	});
});
