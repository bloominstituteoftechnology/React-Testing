import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

it('should only have one component button', () =>{
	const wrapper = shallow(<Button />);
	expect(wrapper.find('.component-button').length).toBe(1);
});



});
