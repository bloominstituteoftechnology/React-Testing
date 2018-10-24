import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Panel />, div);
	});

	it('renders five divs', () => {
		const wrapper = shallow(<Panel />).children();

		const elements = wrapper.find('div');

		expect(elements.length).toBe(5);
	});

	it('renders nineteen buttons', () => {
		const wrapper = shallow(<Panel />);

		const elements = wrapper.find('Button');

		expect(elements.length).toBe(19);
	});

	// should call props.clickhandler on button click
});
