import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it.skip('matches snapshot', () => {
		const snapshot = renderer.create(<Button />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
	
	it('handleClick function is present', () => {
		const wrapper = shallow(<Button />);
		const instance = wrapper.instance().handleClick;
		expect(instance).toBeInstanceOf(Function);
	});
	describe('props are being passed down correctly into button', () => {
	it('name - props being passed correctly', () => {
		const wrapper = shallow(<Button name="AC" />);	
		const buttonProp = wrapper.find('button');
		expect(buttonProp.text()).toEqual('AC');
});
it('orange - class - props being passed correctly', () => {
	const wrapper = shallow(<Button orange />);	
	const buttonProp = wrapper.find('.orange');
	expect(buttonProp).toHaveLength(1)
});
it('wide- class - props being passed correctly', () => {
	const wrapper = shallow(<Button wide />);	
	const buttonProp = wrapper.find('.wide');
	expect(buttonProp).toHaveLength(1);
});

});
});
