import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should render a button with component-button class', () => {
		const wrapper = shallow(<Button/>);
		expect(wrapper.find("component-button")).toBeTruthy();
	});

	it('should have name on props', () => {
		const wrapper = shallow(<Button name="AC"/>);
		expect(wrapper.instance().props.name).toBe('AC');
	});

	it('should have clickHandler on props', () => {
		const wrapper = shallow(<Button clickHandler={()=>{}}/>);
		expect(wrapper.instance().props.clickHandler).toBeTruthy();
	});
});
