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

	it('should render a div with a component-Display class', () => {
		const wrapper = shallow(<Display />);
	
		expect(wrapper.find('div.component-display').length).toBe(1);
	});
});
