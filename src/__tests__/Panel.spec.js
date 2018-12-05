import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('renders the panel', () => {
		const wrapper = shallow(<Panel />);
		const panel = wrapper.find('.component-panel');

		expect(panel).toBeDefined();
	});

	it('has all the buttons', () => {
		const wrapper = shallow(<Panel />);
		const buttons = wrapper.find('Button');
		expect(buttons).toHaveLength(19);
	})
});
