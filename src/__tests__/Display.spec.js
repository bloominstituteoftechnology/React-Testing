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

	it('should have 1 display', () => {
		const wrapper = shallow(<Display />);
		const display = wrapper.find('div.component-display');
		expect(display.length).toBe(1);
	});

});
