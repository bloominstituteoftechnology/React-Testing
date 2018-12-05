import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	describe('state', () => {
		it('total is 0', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.total).toBe('0');   
		});
	
		it('next is null', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.next).toBe(null);   
		});
	
		it('operation is null', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.operation).toBe(null);   
		});
	});

	it('2 components in children', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.children().length).toBe(2);
	});
});
