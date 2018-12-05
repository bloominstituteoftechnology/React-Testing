import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('renders a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toBe(1)
	});

	it('renders a button with a div with a component-button class', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('div.component-button').length).toBe(1)
	});
});