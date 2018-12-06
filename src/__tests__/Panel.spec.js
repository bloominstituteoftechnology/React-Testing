import React from 'react';
import { shallow, render } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it("renders 19 buttons", () => {
		const wrapper = shallow(<Panel />);
		const buttons = wrapper.find("Button");
		expect(buttons.length).toBe(19);
	});

	it("5 of the buttons are orange", () => {
		const wrapper = render(<Panel />);
		const oButtons = wrapper.find(".orange");
		expect(oButtons.length).toBe(5);
	})
});
