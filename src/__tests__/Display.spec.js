import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	const wrapper = shallow(<Display/>);

	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should render a div with component-display class', () => {
		const wrapper = shallow(<Display/>);
		expect(wrapper.find("component-display")).toBeTruthy();
	});

	it('should have a div inside a div', () => {
		const wrapper = shallow(<Display/>);
		expect(wrapper.find('div').length).toBe(2);
	});

	// it('should do something', () => {
	// 	const wrapper = shallow(<Display/>);
	// 	expect(wrapper.instance().props.clickHandler).toBeTruthy();
	// }); 
});
