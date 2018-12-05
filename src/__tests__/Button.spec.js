import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('calls clickHandler when button is clicked', () => {
		const mock = jest.fn();
		const wrapper = shallow(<Button clickHandler={mock} />);
		wrapper.find('button').simulate('click');
		wrapper.find('button').simulate('click');
		expect(mock).toHaveBeenCalledTimes(2);
	});
});
