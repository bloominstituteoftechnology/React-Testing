import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should match snapshot', () => {
		const snapshot = renderer.create(<Display />).toJSON();
		expect(snapshot).toMatchSnapshot();
	})

	it('should diplay the props value', () => {
		const wrapper = shallow(<Display value='0' />)
		const elements = wrapper.find('div.component-display > div');

		expect(elements.text()).toBe('0');
	})
});
