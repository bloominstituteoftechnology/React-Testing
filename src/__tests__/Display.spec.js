import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('renders Dispaly with a div with a component-display class', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('div.component-display').length).toBe(1)
	});
});
