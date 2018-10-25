import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('should contain 19 <Button /> nodes and 6 <div> nodes', () => {
		const wrapper = shallow(<Panel />);
		const buttons = wrapper.find('Button');
		const divs = wrapper.find('div');

		expect(buttons).toHaveLength(19);
		expect(divs).toHaveLength(6);
	});

	it('should have a prop named "clickHandler"', () => {
		const wrapper = shallow(<App />);
		const panel = wrapper.find('Panel');
		expect(panel.prop('clickHandler')).toHaveLength(1);
	});
});
