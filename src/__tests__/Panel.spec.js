import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it("should render a div with component-panel class", () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find("div.component-panel").length).toBe(1);
	  });

	  it("should be 19 Button Components", () => {
		const wrapper = shallow(<Panel />);
		const display = wrapper.find("Button");
	
		expect(display.length).toEqual(19);
	  });

	  it("should check if className component-panel exists", () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find(".component-panel").exists()).toEqual(true);
	  });
});
