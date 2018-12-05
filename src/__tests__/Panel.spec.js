import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('renders a div with class component panel', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel').length).toBe(1);
	});

	it('renders 5 child divs inside the main div', () => {
		const wrapper = shallow(<Panel />);
		const children = wrapper.find('div.component-panel').children();
		expect(children.find('div').length).toBe(5);
	});
});
