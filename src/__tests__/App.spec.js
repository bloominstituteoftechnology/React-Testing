import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('should have "total" match 0 by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.total).toMatch(/0/);
	});

	it('should have "operation" & "next" be null by default', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.operation).toBeNull();
		expect(instance.state.next).toBeNull();
	});
});
