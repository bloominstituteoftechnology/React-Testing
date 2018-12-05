import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Panel/>).toJSON();
		expect(snapshot).toMatchSnapshot();
	})


	it('has a div with a "component-panel" className ', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel').length).toBe(1);
	})
});
