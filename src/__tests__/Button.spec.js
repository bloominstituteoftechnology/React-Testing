import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('renders a button', () => {
		const wrapper = shallow(<Button />);
  		const display = wrapper.find('button');
  		expect(display.length).toBe(1);
	})

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Button />).toJSON();
		expect(snapshot).toMatchSnapshot();
	  })

	it('should display props name', () => {
		const wrapper = shallow(<Button />);
		let display = wrapper.find('button');
		expect(display.find('button').text())
	})

	it('should render the correct props', () => {
		const wrapper = shallow(<Button />);
		if(wrapper.props().orange) {
			expect(wrapper.props().orange).toBe('orange');
		} else if (wrapper.props().wide) {
			expect(wrapper.props().wide).toBe('wide');
		}
	})
});
