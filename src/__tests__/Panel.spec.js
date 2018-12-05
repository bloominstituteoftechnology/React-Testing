import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('check for component-panel', () => {
		// const wrapper = shallow(<Panel />);
		expect(
			shallow(<Panel />)
			.find('div.component-panel')
			.length
		).toBe(1);
	});

	it('check for all buttons', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('Button').length).toBe(19);
	});
});
