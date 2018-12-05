import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it("should have a div with classname component-panel", () => {
		const wrapper = shallow(<Panel/>);
		const div = wrapper.find("div.component-panel");
		expect(div.exists()).toBe(true);
	});

	it("should have buttons", () => {
		const wrapper = shallow(<Panel/>);
		const buttons = wrapper.find("Button");
		expect(buttons.exists()).toBe(true);
	});
});
