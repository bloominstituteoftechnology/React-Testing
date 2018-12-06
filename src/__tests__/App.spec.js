import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it.skip('matches snapshot', () => {
		const snapshot = renderer.create(<App />).toJSON();
		expect(snapshot).toMatchSnapshot();
	});

	it('should have a function called handleClick', () => {
		const wrapper = shallow(<App />);
		const button = wrapper.find({ buttonName });
		wrapper.instance().handleClick();
		// expect(wrapper.state().toEqual());
		// button.simulate('click');

	});

	it('should render a div called component-app', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.component-app').length).toBe(1);
	});


});
