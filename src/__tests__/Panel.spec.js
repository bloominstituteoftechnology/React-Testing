import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('renders div with component-panel class', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel').length).toBe(1);
	});

	it('renders correct number of child divs', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel').children().find('div').length).toBe(5);
	});

	it('renders all calculator buttons', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('Button').length).toBe(19);
	})
});
