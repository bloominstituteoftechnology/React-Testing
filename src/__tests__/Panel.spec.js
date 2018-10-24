import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('should contain 19 <Button /> nodes', () => {
		const wrapper = shallow(<Panel />);
		const elements = wrapper.find('Button');

		expect(elements).toHaveLength(19);
	});
});
