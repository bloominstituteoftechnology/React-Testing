import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	it('Renders Div with display', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Display').length).toBe(1)
	})
	it('Renders Div with panel', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Panel').length).toBe(1)
	})
});
