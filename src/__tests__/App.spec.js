import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Display from '../components/Display/Display';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it("should have state 'total' of 0", () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.total).toEqual('0');
	});

	it("should have state 'next' of null", () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.next).toBe(null);
	});

	it("should have state 'operation' of null", () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.operation).toBe(null);
	});

	it("There should be 19 buttons", () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(wrapper.find('Panel').dive().find('Button').length).toBe(19);
	});
});
