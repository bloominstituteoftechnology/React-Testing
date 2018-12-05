import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('should render a div with component-panel class', () => {
		const wrapper = shallow(<Panel/>);
		expect(wrapper.find("component-panel")).toBeTruthy();
	});

	it('should have 5 divs inside a div', () => {
		const wrapper = shallow(<Display/>);
		expect(wrapper.find('div').length).toBe(6);
	});

	it('first button name is "AC"', () => {
		const wrapper = shallow(<Display/>);
		expect(wrapper.find(Button).first()).toBeTruthy();
	});
});
