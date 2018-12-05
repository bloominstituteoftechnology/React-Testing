import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';
import renderer from 'react-test-renderer'

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
	it('matches snapshot', () => {
		const snapshot = renderer.create(<Button />).toJSON()
		expect(snapshot).toMatchSnapshot()
	})
	it('should render one div', () => {
		const wrapper = shallow(<Button />)
		const display = wrapper.find('div')
		expect(display.length).toBe(1)
	})
	it('should render one button', () => {
		const wrapper = shallow(<Button />)
		const display = wrapper.find('button')
		expect(display.length).toBe(1)
	})

});
