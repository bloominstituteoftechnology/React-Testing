import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Display/>).toJSON();
		expect(snapshot).toMatchSnapshot();
	})

	it('has a div with a "component-display" className ', () => {
		const wrapper = shallow(<Display/>);
		expect(wrapper.find('div.component-display').length).toBe(1);
	})
});
