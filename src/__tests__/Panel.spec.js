import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});
	
	it('matches snapshot', () => {
		const snapshot = renderer.create(<Panel />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('should have 1 display', () => {
		const wrapper = shallow(<Panel />);
		const display = wrapper.find('div.component-panel');
		expect(display.length).toBe(1);
	});

	//Will check total count of Button component
	it('should have 19 Button', () => {
		const wrapper = shallow(<Panel />);
		const button = wrapper.find('Button');
		expect(button.length).toBe(19);
	});

	//Will check for one AC Button component
	it('should have one AC Button', () => {
		const wrapper = shallow(<Panel />);
		const element = wrapper.find('Button.AC');
		expect(element.length).toBe(1);
	});

});
