import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';
import { wrap } from 'module';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it("should render a button", () => {
		const wrapper = shallow(<Button />);
	
		expect(wrapper.find('div.component-button').length).toBe(1);
	});

	it("check if clicked", () => {
		const handleClick = jest.fn();
		const wrapper = shallow(<Button name="%" clickHandler={handleClick} />);
		
		wrapper.find('button').simulate('click')
		expect(handleClick).toBeCalled();
	});
	
});
