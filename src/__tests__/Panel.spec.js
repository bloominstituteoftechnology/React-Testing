import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('should render the correct number of buttons', () => {
		const panel = shallow(<Panel />);
		const button = panel.find('Button');
		expect(button.length).toEqual(19);
	})
});
