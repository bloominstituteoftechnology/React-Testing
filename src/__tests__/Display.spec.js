import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should render the value passed to it', () => {
		const props = {value: '3'}
		const display = shallow(<Display {...props}/>);
		const componentDisplay = display.find('.component-display');

		expect(componentDisplay.text()).toEqual('3');
	});
});
