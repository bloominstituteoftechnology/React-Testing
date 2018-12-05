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
		const nameProp = wrapper.find('button');
		expect(nameProp.text()).toEqual('AC');
});
it('orange - class - props being passed correctly', () => {
	const wrapper = shallow(<Button orange />);	
	const orangeProp = wrapper.find('.orange');
	expect(orangeProp).toHaveLength(1)
});
it('wide- class - props being passed correctly', () => {
	const wrapper = shallow(<Button wide />);	
	const wideProp = wrapper.find('.wide');
	expect(wideProp).toHaveLength(1);
});

});
});
