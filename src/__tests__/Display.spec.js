import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Display />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('should render a display without crashing', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('div');
		expect(display.length).toBe(2);
	}); // should render 2 divs for display

	it('should render a div with a classname of conmponent display', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('.component-display');
		expect(display.length).toBe(1);
	});

	it('should render a div with className="component-display"', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('.component-display');
		expect(display.length).toBe(1);
	});
});
