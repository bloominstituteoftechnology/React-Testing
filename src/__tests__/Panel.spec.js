import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});
	it('renders all the buttons in Panel', () => {
		//19 buttons total
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('Button').length).toBe(19);
	});
});
