import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('check for component-panel', () => {
		const wrapper = shallow(<Panel />);
		const panel = wrapper.find('div.component-panel');
		expect(panel.length).toBe(1);
	});

	it('check for all buttons', () => {
		const wrapper = shallow(<Panel />);
		const buttons = wrapper.find('Button');
		expect(buttons.length).toBe(19);
	});
});
