import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	it('should start with a total state of zero', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.total).toBe('0');
		expect(instance.state.next).toBe(null);
		expect(instance.state.operation).toBe(null);
	});
});
