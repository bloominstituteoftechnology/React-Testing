import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should have a div with the classname: "component-display"', () => {
		const wrapper = shallow(<Display />);
		
		expect(wrapper.find("div.component-display").exists()).toBe(true);
	});

	it('should have a div with the value of "0"', () => {
		const wrapper = shallow(<Display value={"0"}/>);

		expect(wrapper.find("div.component-display div").text()).toBe("0");
	});

	it('should have a div with the value of "5"', () => {
		const wrapper = shallow(<Display value={"5"}/>);

		expect(wrapper.find("div.component-display div").text()).toBe("5");
	});  
});
