import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('renders a Panel with a div with a component-panel class', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div.component-panel').length).toBe(1)
	});
});
