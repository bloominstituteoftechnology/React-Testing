import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Display />, div);
	});

	it('should display the value of props.value', () => {
		const wrapper = shallow(<Display value="5" />);

		const display = wrapper.find('div.component-display').childAt(0);

		expect(display.text()).toBe('5');
	});
});
