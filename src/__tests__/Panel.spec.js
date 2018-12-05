import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
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
