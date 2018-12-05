import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
});


/*
========TESTS TO TEST FOR=========
Specifications
-renders the display
-should be 'orange' if orange
-sholud have a toggle button
-clicking the toggle button toggles the switch

*/