import React from 'react';
import { shallow } from 'enzyme';
import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it("should have a div with classname component-display", () => {
		const wrapper = shallow(<Display/>)
		const div = wrapper.find("div.component-display")
		expect(div.exists()).toBe(true)
	});

	it('should show the value of its value prop', () => {
		let displayWrapper = shallow(<Display value={"0"}/>);

		expect(displayWrapper.find("div").last().text()).toBe("0");
		displayWrapper = shallow(<Display value={"4"}/>);
		expect(displayWrapper.find("div").last().text()).toBe("4");
	});
});
