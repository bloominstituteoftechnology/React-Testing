import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it.skip('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
	
	it('default state is 0 and null', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance();
		expect(instance.state.total).toBe('0');
		expect(instance.state.next).toBeNull();
		expect(instance.state.operation).toBeNull();
	});

	it('handleClick function is present', () => {
		const wrapper = shallow(<App />);
		const instance = wrapper.instance().handleClick;
		expect(instance).toBeInstanceOf(Function);
	
	});


});

/*

- does it render without blowing up - describe, it, shallow
- does it render the right UI - snapshot, .find, 
- state/props handled correctly - .instance, .instance.state, 
- events/methods working correctly - .simulate

.toMatchSnapshot
renderer.create

*/
