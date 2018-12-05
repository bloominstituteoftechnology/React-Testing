import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it("should have a div with classname component-app", () => {
		const wrapper = shallow(<App/>);
		const div = wrapper.find("div.component-app");
		expect(div.exists()).toBe(true);
	});

	it("should render a component called Display", () => {
		const wrapper = shallow(<App/>);
		const display = wrapper.find('Display');
		expect(display.exists()).toBe(true);
	});

	it("should render a component called Panel", () => {
		const wrapper = shallow(<App/>);
		const panel = wrapper.find('Panel');
		expect(panel.exists()).toBe(true);
	});
});
