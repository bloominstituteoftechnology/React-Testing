import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it("should have state 'total' of 0", () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.total).toBe('0');
	});
});
