import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
});
/*

- does it render without blowing up
- does it render the right UI
- state/props handled correctly
- events/methods working correctly

Specifications

- renders the display
- should be "off" by default
- should have a toggle button
- clicking the toggle button toggles the switch
- should display the switch's state
*/
