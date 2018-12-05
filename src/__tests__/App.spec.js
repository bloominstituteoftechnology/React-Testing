import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	
	it('has empty state at begining', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();

		expect(instance.state.total).toBe('0');
		expect(instance.state.next).toBe(null)
		expect(instance.state.operation).toBe(null)
	});
	
	it('has 2 child components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.children().length).toBe(2);
		
	});
});


/* 
TESTS
-has empty state at begining
-has 2 child components
*/