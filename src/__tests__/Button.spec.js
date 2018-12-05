import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});

	it('should match snapshot', () => {
		const snapshot = renderer.create(<Button />).toJSON();

		expect(snapshot).toMatchSnapshot();
	})

	it('see will it display props name', () => {
		const wrapper = shallow(<Button name='1234' />);
		const elements = wrapper.find('div button')
		expect(elements.text()).toBe('1234');
	})

	it('it should render a button', () => {
		const wrapper = shallow(<Button />);
		const elements = wrapper.find('button')

		expect(elements.length).toBe(1);
	})
});
