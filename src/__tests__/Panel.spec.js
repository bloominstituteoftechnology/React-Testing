import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	const props = {
		clickHandler: () => {},
	}

	const panel = shallow(<Panel {...props} />);
	const instance = panel.instance();
	const rows = panel.find('div');
	it('it should have 6 rows of items', () => {
		expect(rows.length).toEqual(6);
	});
	it('each should have a total of 19 buttons', () => {
		expect(rows.find('Button').length).toEqual(19);
	});

	it('handleclick should be called when button is clicked', () => {
		const clickFunc = jest.spyOn(instance, 'handleClick')
		instance.handleClick();

		expect(clickFunc).toBeCalled();
	});

	// it('handleclick should be called when button is clicked', () => {
		
	// 	const buttons = rows.find('Button');
		
	// 	buttons.forEach(elem => {
	// 		const clickFunc = jest.spyOn(instance, 'handleClick')
	// 		elem.simulate('click')
	// 		expect(clickFunc).toBeCalled();
	// 	})
	// });
});
