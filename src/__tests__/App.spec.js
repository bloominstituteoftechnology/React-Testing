import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('displays a div with classname component-app', () => {
		const wrapper = shallow(<App />)
		const div = wrapper.find('div.component-app')
		expect(div.length).toBe(1)
	})

	it('starts at 0', () => {
		const wrapper = shallow(<App />)
		const instance = wrapper.instance()
		expect(instance.state.total).toEqual('0')
	})
});
