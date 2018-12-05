import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('has start at 0 state', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
 		expect(instance.state.total).toBe('0');
	});

	it('has handleClick function', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance().handleClick;
		expect(instance).toBeInstanceOf(Function);
	
	});
});
