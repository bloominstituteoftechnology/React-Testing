import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
	it('renders without crashing', () => {
		shallow(<Panel />);
	});

	it('matches snapshot', () => {
		const snapshot = renderer.create(<Panel />).toJSON();
		expect(snapshot).toMatchSnapshot();
	  })

	it('renders a div', () => {
		const wrapper = shallow(<Panel />);
		expect(wrapper.find('div.component-panel').length).toBe(1);
	})

	it('should render 5 child divs', () => {
		const wrapper = shallow(<Panel />);
		const display = wrapper.find('div.component-panel').children();
		expect(display.find('div').length).toBe(5);
	})
});

