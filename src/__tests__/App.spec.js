import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	describe('testing state', () => {
		it('property total on state should be \'0\'', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.total).toEqual('0');
		});

		it('property next in state should be null', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.next).toBeNull();
		});

		it('property operation in state should be null', () => {
			const wrapper = shallow(<App />);
			const instance = wrapper.instance();
			expect(instance.state.operation).toBeNull();
		});
		
	});
});
