import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it("should have 19 buttons", () => {
		const wrapper = shallow(<Panel />);
		const instance = wrapper.instance();
		expect(wrapper.find('Button').length).toBe(19);
	});

	it('should show that there is 1 div w/ classname Component-display', () => {
		const wrapper = shallow(<Panel />);
		const instance = wrapper.instance();
		expect(wrapper.find('div.component-panel').length).toEqual(1);
	});

	it("should have 5 children", () => {
		const wrapper = shallow(<Panel />);
		const instance = wrapper.instance();
		expect(wrapper.children().length).toBe(5);
	});
});
