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
	
	it('should have a div with the classname: "component-panel"', () => {
		const wrapper = shallow(<Panel />);
		
		expect(wrapper.find('div.component-panel').exists()).toBe(true);
	});

	it('should have 19 buttons', () => {
		const wrapper = shallow(<Panel />);
		
		expect(wrapper.find('Button').length).toBe(19);
	});
});
