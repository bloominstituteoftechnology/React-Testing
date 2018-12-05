import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	const panel = shallow(<Panel />);
	const instance = panel.instance();
	const rows = panel.find('div');
	it('it should have 6 rows of items', () => {
		expect(rows.length).toEqual(6);
	});
	it('each should have a total of 19 buttons', () => {
		expect(rows.find('Button').length).toEqual(19);
	});
});
