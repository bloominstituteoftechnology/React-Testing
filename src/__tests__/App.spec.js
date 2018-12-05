import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
	it('should render div with className component-app', () => {
		const wrapper = shallow(<App />)
		const display = wrapper.find('div.component-app')
		expect(display.length).toBe(1)
	});

});
